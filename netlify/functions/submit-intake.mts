interface IntakeFormData {
  name: string;
  email: string;
  organization: string;
  interests: string[];
  description: string;
  teamSize: string;
  timeline: string;
  investment: string;
  anythingElse: string;
}

async function sendEmailViaResend(formData: IntakeFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@digitaljaywalking.com';

  const emailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1A1A1A; border-bottom: 2px solid #E2725B; padding-bottom: 10px;">New Project Inquiry</h1>

      <div style="background: #FDFBF7; padding: 20px; border-radius: 12px; margin: 20px 0;">
        <h2 style="color: #4A7C7A; margin-top: 0;">Contact Information</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ''}
      </div>

      <div style="background: #FDFBF7; padding: 20px; border-radius: 12px; margin: 20px 0;">
        <h2 style="color: #4A7C7A; margin-top: 0;">Project Details</h2>

        <h3 style="color: #6B4E71; font-size: 14px; margin-bottom: 8px;">Areas of Interest</h3>
        <ul style="margin: 0 0 16px 0; padding-left: 20px;">
          ${formData.interests.map(i => `<li>${i}</li>`).join('')}
        </ul>

        <h3 style="color: #6B4E71; font-size: 14px; margin-bottom: 8px;">Project Description</h3>
        <p style="background: white; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${formData.description}</p>
      </div>

      <div style="background: #FDFBF7; padding: 20px; border-radius: 12px; margin: 20px 0;">
        <h2 style="color: #4A7C7A; margin-top: 0;">Context</h2>
        <p><strong>Team Size:</strong> ${formData.teamSize || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
        <p><strong>Investment Comfort:</strong> ${formData.investment || 'Not specified'}</p>
        ${formData.anythingElse ? `
          <h3 style="color: #6B4E71; font-size: 14px; margin-bottom: 8px;">Additional Notes</h3>
          <p style="background: white; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${formData.anythingElse}</p>
        ` : ''}
      </div>

      <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
        <p>Submitted via digitaljaywalking.com intake form</p>
        <p>${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
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
      // Using Resend free tier - no domain verification needed
      // Change to your verified domain later: 'Digital Jaywalking <notifications@digitaljaywalking.com>'
      from: 'Digital Jaywalking <onboarding@resend.dev>',
      to: [notifyEmail],
      subject: `New Project Inquiry from ${formData.name}`,
      html: emailHtml,
      reply_to: formData.email,
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
    const formData: IntakeFormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.description) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    await sendEmailViaResend(formData);

    return new Response(
      JSON.stringify({ success: true, message: 'Inquiry submitted successfully' }),
      { status: 200, headers }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Submit intake error:', message);

    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers }
    );
  }
};

export const config = {
  path: '/api/submit-intake',
};
