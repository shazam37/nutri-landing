import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// 1. Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Initialize Supabase Client
// Use Service Role Key for server-side write access to bypass RLS if needed
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, link } = body;

    // --- DB LOGIC: Save user to Supabase ---
    const { error: dbError } = await supabase
      .from('registrations') // Ensure your table name matches this
      .insert([
        { 
          name, 
          email, 
          role, 
          link: link || 'N/A',
          created_at: new Date().toISOString() 
        }
      ]);

    // Handle duplicate emails specifically
    if (dbError && dbError.code === '23505') {
      return NextResponse.json({ 
        message: "This email is already registered in our system.", 
        success: false 
      }, { status: 400 });
    }

    if (dbError) {
      console.error("Supabase Error:", dbError);
      throw new Error("Database insertion failed");
    }

    // --- EMAIL LOGIC: Trigger automated confirmation ---
    const { data, error: emailError } = await resend.emails.send({
      from: 'Nutri.ai <onboarding@resend.dev>', // Update to your domain later
      to: [email],
      subject: 'Welcome to the Lab: Access Pending 🧬',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
          <h1 style="color: #10b981; font-size: 32px; letter-spacing: -1px;">Nutri.ai</h1>
          <p style="font-size: 18px; line-height: 1.6;">Hello <strong>${name}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.6;">
            Your request to join the Nutri.ai ecosystem as a <strong>${role}</strong> has been received and logged in our database. 
            We are currently in a restricted <strong>Internal Beta (v0.8.2)</strong> phase.
          </p>
          
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 14px; font-weight: bold; color: #64748b; text-transform: uppercase;">Next Steps:</p>
            <ul style="padding-left: 20px; margin-top: 10px; font-size: 15px;">
              <li><strong>Testers:</strong> You will receive a secure link to the Android APK / iOS TestFlight once your slot is ready.</li>
              <li><strong>Collaborators:</strong> We will review your profile (${link || 'No portfolio provided'}) for repository access.</li>
            </ul>
          </div>

          <p style="font-size: 14px; color: #94a3b8;">
            Deployment Sync: Monday, 02:30:00 UTC <br/>
            System Status: Active | Record ID: Verified
          </p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #cbd5e1;">© 2026 Nutri.ai — Built for the health-conscious techie.</p>
        </div>
      `,
    });

    if (emailError) {
      // We don't return 400 here because the user IS saved in the DB already
      console.error("Resend Error:", emailError);
    }

    return NextResponse.json({ 
      message: "Registration successful! Data saved and email triggered.",
      success: true,
      data 
    });

  } catch (err) {
    console.error("Critical API Error:", err);
    return NextResponse.json({ 
      message: "Server Error: Could not complete registration.", 
      success: false 
    }, { status: 500 });
  }
}