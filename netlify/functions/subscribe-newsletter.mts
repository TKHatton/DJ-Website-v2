function sanitize(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function addToResendAudience(apiKey: string, email: string): Promise<void> {
  const audienceId = process.env.RESEND_DJ_AUDIENCE_ID;
  if (!audienceId) {
    // No audience configured — skip silently, notification email is still sent
    return;
  }

  const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    // Non-fatal: log but don't surface to the user
    console.error(`Resend audience error: ${response.status} ${error}`);
  }
}

async function sendNotificationViaResend(apiKey: string, email: string): Promise<void> {
  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@digitaljaywalking.com';

  const emailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 0; background: #FDFBF7;">
      <div style="background: linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%); padding: 40px 32px; text-align: center;">
        <h1 style="color: #FDFBF7; margin: 0 0 8px 0; font-size: 28px;">New Subscriber</h1>
        <p style="color: #EBC06D; margin: 0; font-size: 14px; letter-spacing: 1px;">THE BLIND SPOT NEWSLETTER</p>
      </div>

      <div style="padding: 32px;">
        <div style="background: white; border-radius: 16px; padding: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <p style="margin: 0 0 8px 0; color: rgba(26,26,26,0.6); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
          <a href="mailto:${sanitize(email)}" style="font-size: 20px; color: #1A1A1A; text-decoration: none; font-weight: 600;">${sanitize(email)}</a>
        </div>
      </div>

      <div style="background: #1A1A1A; padding: 24px 32px; text-align: center;">
        <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 13px;">
          Subscribed via digitaljaywalking.com
        </p>
        <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.4); font-size: 12px;">
          ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })} ET
        </p>
      </div>
    </div>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'Digital Jaywalking <onboarding@resend.dev>',
      to: [notifyEmail],
      subject: `New newsletter subscriber: ${email}`,
      html: emailHtml,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${response.status} ${error}`);
  }
}

export default async (req: Request) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers }
    );
  }

  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email address is required' }),
        { status: 400, headers }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const cleanEmail = email.trim().toLowerCase();

    // Run both in parallel — audience add is non-fatal if it fails
    await Promise.all([
      sendNotificationViaResend(apiKey, cleanEmail),
      addToResendAudience(apiKey, cleanEmail),
    ]);

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully' }),
      { status: 200, headers }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Newsletter subscribe error:', message);

    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers }
    );
  }
};

export const config = {
  path: '/api/subscribe-newsletter',
};
