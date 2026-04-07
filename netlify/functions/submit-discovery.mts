interface DiscoveryFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  workflowDescription: string;
  painPoints: string;
  frequency: string;
  currentFailures: string;
  currentTools: string[];
  otherTools: string;
  dataLocation: string;
  existingIntegrations: string;
  humanDecisions: string;
  neverAutomate: string;
  successLooksLike: string;
  currentTimeSpent: string;
  targetMetrics: string;
  compliance: string;
  approvalProcess: string;
  previousAttempts: string;
  concerns: string;
  deadline: string;
  priority: string;
  anythingElse: string;
  videoUrl: string;
}

// Sanitize HTML to prevent XSS in email
function sanitize(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendEmailViaResend(formData: DiscoveryFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || 'info@digitaljaywalking.com';

  const section = (title: string, content: string) => content ? `
    <div style="margin-bottom: 24px;">
      <h3 style="color: #6B4E71; font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">${sanitize(title)}</h3>
      <p style="margin: 0; color: #1A1A1A; white-space: pre-wrap; line-height: 1.6;">${sanitize(content)}</p>
    </div>
  ` : '';

  // Video URL section with clickable link
  const videoSection = formData.videoUrl ? `
    <div style="background: #6B4E71; padding: 20px 32px; margin-top: 24px;">
      <h3 style="color: white; margin: 0 0 8px 0; font-size: 16px;">Video Walkthrough</h3>
      <a href="${sanitize(formData.videoUrl)}" style="color: #EBC06D; word-break: break-all;" target="_blank">${sanitize(formData.videoUrl)}</a>
    </div>
  ` : '';

  const emailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; padding: 0; background: #FDFBF7;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%); padding: 40px 32px; text-align: center;">
        <h1 style="color: #FDFBF7; margin: 0 0 8px 0; font-size: 28px;">Build Brief</h1>
        <p style="color: #E2725B; margin: 0; font-size: 14px; letter-spacing: 1px;">NEW SUBMISSION</p>
      </div>

      <!-- Contact Info -->
      <div style="background: #4A7C7A; padding: 24px 32px; color: white;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0;">
              <strong style="color: rgba(255,255,255,0.7); font-size: 12px;">NAME</strong><br>
              <span style="font-size: 18px;">${sanitize(formData.name)}</span>
            </td>
            <td style="padding: 8px 0; text-align: right;">
              <strong style="color: rgba(255,255,255,0.7); font-size: 12px;">EMAIL</strong><br>
              <a href="mailto:${sanitize(formData.email)}" style="color: white; font-size: 18px;">${sanitize(formData.email)}</a>
            </td>
          </tr>
          ${formData.company || formData.role ? `
          <tr>
            <td style="padding: 8px 0;">
              ${formData.company ? `<strong style="color: rgba(255,255,255,0.7); font-size: 12px;">COMPANY</strong><br><span>${sanitize(formData.company)}</span>` : ''}
            </td>
            <td style="padding: 8px 0; text-align: right;">
              ${formData.role ? `<strong style="color: rgba(255,255,255,0.7); font-size: 12px;">ROLE</strong><br><span>${sanitize(formData.role)}</span>` : ''}
            </td>
          </tr>
          ` : ''}
        </table>
      </div>

      ${videoSection}

      <!-- Main Content -->
      <div style="padding: 32px;">

        <!-- The Workflow -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #E2725B; padding-bottom: 12px;">
            <span style="background: #E2725B; color: white; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">02</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">The Workflow</h2>
          </div>
          ${section('Workflow Description', formData.workflowDescription)}
          ${section('Pain Points', formData.painPoints)}
          ${formData.frequency ? section('Frequency', formData.frequency) : ''}
          ${section('Current Failures', formData.currentFailures)}
        </div>

        <!-- Tools & Data -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #EBC06D; padding-bottom: 12px;">
            <span style="background: #EBC06D; color: #1A1A1A; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">03</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">Tools & Data</h2>
          </div>
          ${formData.currentTools.length > 0 ? `
            <div style="margin-bottom: 24px;">
              <h3 style="color: #6B4E71; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Current Tools</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${formData.currentTools.map(tool => `<span style="background: #4A7C7A; color: white; padding: 6px 12px; border-radius: 20px; font-size: 13px;">${sanitize(tool)}</span>`).join('')}
              </div>
            </div>
          ` : ''}
          ${section('Other Tools', formData.otherTools)}
          ${section('Data Location', formData.dataLocation)}
          ${section('Existing Integrations', formData.existingIntegrations)}
        </div>

        <!-- Human Decisions -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #6B4E71; padding-bottom: 12px;">
            <span style="background: #6B4E71; color: white; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">04</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">Human Decisions</h2>
          </div>
          ${section('Where Human Judgment is Needed', formData.humanDecisions)}
          ${section('Never Automate', formData.neverAutomate)}
        </div>

        <!-- Success Metrics -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #4A7C7A; padding-bottom: 12px;">
            <span style="background: #4A7C7A; color: white; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">05</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">Success Metrics</h2>
          </div>
          ${section('Success Looks Like', formData.successLooksLike)}
          ${formData.currentTimeSpent ? section('Current Time Spent', formData.currentTimeSpent) : ''}
          ${section('Target Metrics', formData.targetMetrics)}
        </div>

        <!-- Constraints -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #E2725B; padding-bottom: 12px;">
            <span style="background: #E2725B; color: white; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">06</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">Constraints & Context</h2>
          </div>
          ${section('Compliance Requirements', formData.compliance)}
          ${section('Approval Process', formData.approvalProcess)}
          ${section('Previous Attempts', formData.previousAttempts)}
          ${section('Concerns', formData.concerns)}
        </div>

        <!-- Timeline -->
        <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid rgba(26,26,26,0.1);">
          <div style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #EBC06D; padding-bottom: 12px;">
            <span style="background: #EBC06D; color: #1A1A1A; width: 28px; height: 28px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 12px;">07</span>
            <h2 style="margin: 0; color: #1A1A1A; font-size: 18px;">Timeline & Priority</h2>
          </div>
          ${formData.deadline ? section('Deadline', formData.deadline) : ''}
          ${section('Top Priority', formData.priority)}
          ${section('Anything Else', formData.anythingElse)}
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #1A1A1A; padding: 24px 32px; text-align: center;">
        <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 13px;">
          Build Brief submitted via digitaljaywalking.com
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
      subject: `Build Brief: ${formData.name}${formData.company ? ` (${formData.company})` : ''}`,
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
    const formData: DiscoveryFormData = await req.json();

    if (!formData.name || !formData.email || !formData.workflowDescription || !formData.successLooksLike) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    await sendEmailViaResend(formData);

    return new Response(
      JSON.stringify({ success: true, message: 'Discovery form submitted successfully' }),
      { status: 200, headers }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Submit discovery error:', message);

    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers }
    );
  }
};

export const config = {
  path: '/api/submit-discovery',
};
