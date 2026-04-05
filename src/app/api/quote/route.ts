import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      sector,
      mode,
      product,
      customizing,
      customHardware,
      name,
      organization,
      email,
      phone,
      siteAddress,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const sectorName = sector
      ? sector.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
      : 'Not Specified';

    const productName = product
      ? product.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
      : 'Custom Configuration';

    const modeLabel = mode === 'rent' ? 'Monthly Deployment (Rental)' : 'Hardware Acquisition (Purchase)';

    // Build the rich HTML email
    const htmlBody = `
      <div style="font-family: 'Courier New', monospace; max-width: 680px; margin: 0 auto; background: #f4f4f5; padding: 0;">
        
        <!-- Header -->
        <div style="background: #0a1628; padding: 40px 32px; text-align: center;">
          <h1 style="color: #1b9aaa; font-size: 28px; letter-spacing: 6px; text-transform: uppercase; margin: 0 0 8px;">
            Z1 TRAILERS
          </h1>
          <p style="color: #6b7280; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin: 0;">
            Deployment Briefing Report // ${new Date().toISOString().split('T')[0]}
          </p>
        </div>

        <!-- Alert Banner -->
        <div style="background: #1b9aaa; padding: 16px 32px; text-align: center;">
          <p style="color: #0a1628; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold; margin: 0;">
            ⚡ NEW QUOTE REQUEST — IMMEDIATE ACTION REQUIRED
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 40px 32px; background: #ffffff;">
          
          <!-- Section 1: Sector -->
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <p style="color: #1b9aaa; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px;">01 — TARGET SECTOR</p>
            <p style="color: #0a1628; font-size: 20px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; margin: 0;">${sectorName}</p>
          </div>

          <!-- Section 2: Mode -->
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <p style="color: #1b9aaa; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px;">02 — PROCUREMENT MODE</p>
            <p style="color: #0a1628; font-size: 20px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; margin: 0;">${modeLabel}</p>
          </div>

          <!-- Section 3: Asset -->
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <p style="color: #1b9aaa; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px;">03 — DESIGNATED ASSET</p>
            <p style="color: #0a1628; font-size: 20px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; margin: 0;">
              ${productName}${customizing ? ' (+CUSTOM CONFIG)' : ''}
            </p>
            ${customHardware ? `
              <div style="margin-top: 16px; padding: 16px; background: #fef3c7; border-left: 3px solid #d97706;">
                <p style="color: #92400e; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px; font-weight: bold;">CUSTOM HARDWARE REQUIREMENTS:</p>
                <p style="color: #78350f; font-size: 13px; margin: 0; line-height: 1.6;">${customHardware}</p>
              </div>
            ` : ''}
          </div>

          <!-- Section 4: Contact -->
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
            <p style="color: #1b9aaa; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 16px;">04 — COMMAND LIAISON</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; width: 140px;">Officer:</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 14px; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Organization:</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 14px; font-weight: bold;">${organization || 'Not Provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Email:</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 14px; font-weight: bold;">
                  <a href="mailto:${email}" style="color: #1b9aaa; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Phone:</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 14px; font-weight: bold;">
                  ${phone ? `<a href="tel:${phone}" style="color: #1b9aaa; text-decoration: none;">${phone}</a>` : 'Not Provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Site Address:</td>
                <td style="padding: 8px 0; color: #0a1628; font-size: 14px; font-weight: bold;">${siteAddress || 'Not Provided'}</td>
              </tr>
            </table>
          </div>

          <!-- Quick Action -->
          <div style="text-align: center; padding: 24px; background: #f0fdfa; border: 1px solid #99f6e4;">
            <p style="color: #0a1628; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 16px;">RESPOND TO THIS LEAD</p>
            <a href="mailto:${email}?subject=Z1%20Trailers%20—%20Your%20Security%20Deployment%20Quote&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThank%20you%20for%20your%20interest%20in%20Z1%20Trailers.%20" 
               style="display: inline-block; background: #0a1628; color: #1b9aaa; padding: 14px 32px; text-decoration: none; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold;">
              REPLY TO ${name.toUpperCase()}
            </a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background: #0a1628; padding: 24px 32px; text-align: center;">
          <p style="color: #4b5563; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; margin: 0;">
            Z1 TRAILERS TACTICAL COMMAND CENTER // AUTOMATED BRIEFING
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Z1 Trailers Command <onboarding@resend.dev>',
      to: ['yasir@udgok.com'],
      replyTo: email,
      subject: `[Z1 QUOTE] ${sectorName} — ${productName} — ${modeLabel}`,
      html: htmlBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Quote API error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
