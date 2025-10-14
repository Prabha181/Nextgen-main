// src/index.js
const metadata = {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Set CORS headers for all responses
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method !== 'POST') {
      return new Response('Only POST allowed', { 
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const { name, email, message } = await request.json();
      console.log('Received data:', { name, email, message });
      
      const payload = {
        from: 'No Reply <onboarding@mailer.nextgenconsultancy.in>',
        to: 'vatsal@nextgenbusiness.co.in',
        subject:` Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                ${message}
              </div>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              This message was sent from your website contact form.
            </p>
          </div>
        `
      };
      
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization':` Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!resp.ok) {
        const errorText = await resp.text();
        console.error('Resend API error:', resp.status, errorText);
        throw new Error(`Resend API error: ${resp.status}`);
      }
      
      const responseData = await resp.json();
      console.log('Email sent successfully:', responseData);
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: responseData.id 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
      
    } catch (error) {
      console.error('Error processing request:', error);
      return new Response(JSON.stringify({ 
        success: false, 
        error: error.message 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
  }
};

export default metadata;