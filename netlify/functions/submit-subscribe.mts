import { sendResendEmail, escapeHtml, parseFormBody, thanksPage, errorPage } from './_resend';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return errorPage('This endpoint only accepts form submissions.');
  }

  try {
    const data = await parseFormBody(req);
    const email = (data.email || '').trim();

    if (!email || !EMAIL_RE.test(email)) {
      return errorPage('Please enter a valid email address.');
    }

    const emailHtml = `
      <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h1 style="color:#1A1A1A;border-bottom:2px solid #FF5C2A;padding-bottom:10px;">New Newsletter Signup</h1>
        <div style="background:#FAFAF7;padding:20px;border-radius:8px;margin:20px 0;">
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        </div>
        <p style="text-align:center;color:#666;font-size:12px;">
          Submitted via digitaljaywalking.com footer signup<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
        </p>
      </div>
    `;

    await sendResendEmail({
      subject: `Newsletter signup: ${email}`,
      html: emailHtml,
      replyTo: email,
    });

    return thanksPage(
      "You're on the list.",
      "We'll send a note when there's something worth reading. No spam, no drips."
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('submit-subscribe error:', message);
    return errorPage('We couldn\'t add you to the list right now.');
  }
};

export const config = {
  path: '/api/subscribe',
};
