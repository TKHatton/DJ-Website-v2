export interface ResendOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendResendEmail({ subject, html, replyTo }: ResendOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@digitaljaywalking.com';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'Digital Jaywalking <onboarding@resend.dev>',
      to: [notifyEmail],
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${response.status} ${error}`);
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function parseFormBody(req: Request): Promise<Record<string, string>> {
  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return await req.json();
  }
  const text = await req.text();
  const params = new URLSearchParams(text);
  const out: Record<string, string> = {};
  params.forEach((value, key) => {
    out[key] = value;
  });
  return out;
}

export function thanksPage(heading: string, body: string): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thanks — Digital Jaywalking</title>
  <link rel="stylesheet" href="/assets/css/main.css">
  <style>
    body { background:#FAFAF7; color:#1A1A1A; font-family:Georgia,serif; margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; }
    .card { max-width:520px; text-align:left; }
    .eyebrow { font-family:'JetBrains Mono',ui-monospace,monospace; font-size:11px; letter-spacing:1.4px; color:#666; text-transform:uppercase; margin:0 0 16px; }
    h1 { font-size:32px; line-height:1.2; margin:0 0 16px; }
    p { line-height:1.6; margin:0 0 16px; }
    a.back { display:inline-block; margin-top:8px; padding:12px 20px; background:#1A1A1A; color:#FAFAF7; text-decoration:none; border-radius:2px; font-family:'JetBrains Mono',ui-monospace,monospace; font-size:13px; letter-spacing:0.6px; }
    a.back:hover { background:#FF5C2A; }
  </style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">Digital Jaywalking</p>
    <h1>${escapeHtml(heading)}</h1>
    <p>${escapeHtml(body)}</p>
    <a class="back" href="/">← Back to digitaljaywalking.com</a>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export function errorPage(message: string): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Something went wrong — Digital Jaywalking</title>
  <style>
    body { background:#FAFAF7; color:#1A1A1A; font-family:Georgia,serif; margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; }
    .card { max-width:520px; }
    .eyebrow { font-family:'JetBrains Mono',ui-monospace,monospace; font-size:11px; letter-spacing:1.4px; color:#666; text-transform:uppercase; margin:0 0 16px; }
    h1 { font-size:32px; line-height:1.2; margin:0 0 16px; }
    p { line-height:1.6; margin:0 0 16px; }
    a { color:#1A1A1A; }
  </style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">Something went wrong</p>
    <h1>That didn't go through.</h1>
    <p>${escapeHtml(message)}</p>
    <p>Try again, or email us directly at <a href="mailto:info@digitaljaywalking.com">info@digitaljaywalking.com</a>.</p>
    <p><a href="/">← Back to digitaljaywalking.com</a></p>
  </div>
</body>
</html>`;
  return new Response(html, {
    status: 400,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
