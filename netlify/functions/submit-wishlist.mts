import { sendResendEmail, escapeHtml, parseFormBody, thanksPage, errorPage } from './_resend';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return errorPage('This endpoint only accepts form submissions.');
  }

  try {
    const data = await parseFormBody(req);
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const description = (data.description || '').trim();

    if (!name || !email || !description) {
      return errorPage('Please include your name, email, and a description of what you\'d build.');
    }

    const emailHtml = `
      <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h1 style="color:#1A1A1A;border-bottom:2px solid #FF5C2A;padding-bottom:10px;">New Wishlist Submission</h1>
        <div style="background:#FAFAF7;padding:20px;border-radius:8px;margin:20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        </div>
        <div style="background:#FAFAF7;padding:20px;border-radius:8px;margin:20px 0;">
          <h2 style="color:#1A1A1A;font-size:16px;margin-top:0;">What they'd build</h2>
          <p style="background:white;padding:12px;border-radius:6px;white-space:pre-wrap;">${escapeHtml(description)}</p>
        </div>
        <p style="text-align:center;color:#666;font-size:12px;">
          Submitted via digitaljaywalking.com wishlist form<br>
          ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
        </p>
      </div>
    `;

    await sendResendEmail({
      subject: `Wishlist idea from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return thanksPage(
      'Idea received.',
      "We read every wishlist submission. If it's a direction we decide to follow, we'll reach out. No promises, just real attention."
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('submit-wishlist error:', message);
    return errorPage('We couldn\'t submit your idea right now.');
  }
};

export const config = {
  path: '/api/wishlist',
};
