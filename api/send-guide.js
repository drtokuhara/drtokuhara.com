import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || null;
const SITE_URL = 'https://drtokuhara.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Desert Vision Center <guides@resend.dev>';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, title, pdfUrl } = req.body;

  if (!email || !title || !pdfUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Save to patient guide audience for newsletter/intake funnel
  if (AUDIENCE_ID) {
    resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      firstName: '',
      lastName: '',
      unsubscribed: false,
    }).catch(() => {});
  }

  try {
    // Fetch the actual PDF to attach
    const pdfFullUrl = `${SITE_URL}${pdfUrl}`;
    const pdfResponse = await fetch(pdfFullUrl);

    if (!pdfResponse.ok) {
      console.error(`PDF fetch failed: ${pdfResponse.status} for ${pdfFullUrl}`);
      return res.status(500).json({ error: 'Could not retrieve guide PDF' });
    }

    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
    const pdfFilename = pdfUrl.split('/').pop() || 'patient-guide.pdf';

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Your Patient Guide: ${title}`,
      attachments: [
        {
          filename: pdfFilename,
          content: pdfBuffer,
        },
      ],
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1A1A2E;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="font-size: 20px; font-weight: 600; color: #007D95; margin: 0 0 4px;">Dr. Keith Tokuhara, MD</h2>
            <p style="font-size: 13px; color: #52596B; margin: 0;">Desert Vision Center &middot; Rancho Mirage</p>
          </div>

          <div style="border-top: 2px solid #007D95; padding-top: 24px;">
            <p style="font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
              Thank you for your interest in <strong>${title}</strong>. Your guide is attached to this email for easy reference.
            </p>

            <div style="background: #f8f7f4; border-radius: 8px; padding: 16px 20px; margin: 16px 0;">
              <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #52596B;">
                You can also view this guide online anytime:<br>
                <a href="${pdfFullUrl}" style="color: #007D95; text-decoration: none; font-weight: 500;">View Guide on drtokuhara.com</a>
              </p>
            </div>

            <p style="font-size: 15px; line-height: 1.6; margin: 16px 0 0;">
              Have questions about your situation? We are happy to help.
            </p>

            <div style="margin-top: 20px; text-align: center;">
              <a href="tel:7603404700" style="display: inline-block; background: #007D95; color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 15px; font-weight: 600;">Call 760.340.4700</a>
            </div>
          </div>

          <!-- Footer with social links -->
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E8E4DE; text-align: center;">
            <p style="font-size: 13px; color: #52596B; margin: 0 0 12px;">
              <a href="https://desertvisioncenter.com" style="color: #007D95; text-decoration: none; font-weight: 600;">desertvisioncenter.com</a>
              &nbsp;&middot;&nbsp;
              <a href="https://drtokuhara.com" style="color: #007D95; text-decoration: none; font-weight: 600;">drtokuhara.com</a>
            </p>

            <!-- Social icons row -->
            <div style="margin: 12px 0 16px;">
              <!--[if mso]>
              <table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
              <td style="padding: 0 8px;"><a href="https://www.facebook.com/desertvisioncenter" style="color: #52596B; text-decoration: none; font-size: 13px;">Facebook</a></td>
              <td style="padding: 0 8px;"><a href="https://www.instagram.com/desertvisioncenter" style="color: #52596B; text-decoration: none; font-size: 13px;">Instagram</a></td>
              <td style="padding: 0 8px;"><a href="https://www.youtube.com/channel/UCtCYJBS-bpte2XQFxiZAghw" style="color: #52596B; text-decoration: none; font-size: 13px;">YouTube</a></td>
              <td style="padding: 0 8px;"><a href="https://x.com/doctortokuhara" style="color: #52596B; text-decoration: none; font-size: 13px;">X</a></td>
              </tr></table>
              <![endif]-->
              <!--[if !mso]><!-->
              <a href="https://www.facebook.com/desertvisioncenter" style="display: inline-block; margin: 0 6px; width: 32px; height: 32px; line-height: 32px; background: #007D95; color: #fff; border-radius: 50%; text-decoration: none; font-size: 14px; font-weight: 600;" title="Facebook">f</a>
              <a href="https://www.instagram.com/desertvisioncenter" style="display: inline-block; margin: 0 6px; width: 32px; height: 32px; line-height: 32px; background: #007D95; color: #fff; border-radius: 50%; text-decoration: none; font-size: 14px; font-weight: 600;" title="Instagram">&#9675;</a>
              <a href="https://www.youtube.com/channel/UCtCYJBS-bpte2XQFxiZAghw" style="display: inline-block; margin: 0 6px; width: 32px; height: 32px; line-height: 32px; background: #007D95; color: #fff; border-radius: 50%; text-decoration: none; font-size: 14px; font-weight: 600;" title="YouTube">&#9654;</a>
              <a href="https://x.com/doctortokuhara" style="display: inline-block; margin: 0 6px; width: 32px; height: 32px; line-height: 32px; background: #007D95; color: #fff; border-radius: 50%; text-decoration: none; font-size: 14px; font-weight: 600;" title="X / Twitter">&#120143;</a>
              <!--<![endif]-->
            </div>

            <p style="font-size: 12px; color: #9CA3AF; margin: 0; line-height: 1.5;">
              Desert Vision Center<br>
              35900 Bob Hope Dr, Suite 175, Rancho Mirage, CA 92270
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return res.status(500).json({ error: 'Failed to send email', detail: error.message || error.name || 'Unknown Resend error' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Send guide error:', err.message, err.stack);
    return res.status(500).json({ error: 'Internal server error', detail: err.message });
  }
}
