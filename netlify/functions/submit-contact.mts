import { sendResendEmail, escapeHtml, parseFormBody, thanksPage, errorPage } from './_resend';

const subjectLabels: Record<string, string> = {
  'general': 'General question',
  'custom-build': 'Custom build inquiry',
  'customization': 'Product customization',
  'press': 'Press',
  'speaking': 'Speaking',
  'other': 'Other',
};

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return errorPage('This endpoint only accepts form submissions.');
  }

  try {
    const data = await parseFormBody(req);
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const subject = (data.subject || 'general').trim();
    const message = (data.message || '').trim();

    if (!name || !email || !message) {
      return errorPage('Please fill in your name, email, and message before sending.');
    }

    const subjectLabel = subjectLabels[subject] || subject;

    const emailHtml = `
      <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h1 style="color:#1A1A1A;border-bottom:2px solid #FF5C2A;padding-bottom:10px;">New Contact Form Message</h1>
        <div style="background:#FAFAF7;padding:20px;border-radius:8px;margin:20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
        </div>
        <div style="background:#FAFAF7;padding:20px;border-radius:8px;margin:20px 0;">
          <h2 style="color:#1A1A1A;font-size:16px;margin-top:0;">Message</h2>
          <p style="background:white;padding:12px;border-radius:6px;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <p style="text-align:center;color:#666;font-size:12px;">
          Submitted via digitaljaywalking.com contact form<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
        </p>
      </div>
    `;

    await sendResendEmail({
      subject: `Contact form: ${subjectLabel} — ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return thanksPage(
      'Got it. Thanks for writing.',
      "We read every message. You'll hear back within a few business days. If you don't, your note got lost — send it again."
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('submit-contact error:', message);
    return errorPage('We couldn\'t send your message right now.');
  }
};

export const config = {
  path: '/api/contact',
};
