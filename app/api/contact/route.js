export const runtime = "edge";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, company, email } = body;

    console.log("📩 Incoming form data:", body);

    if (!name || !mobile || !email) {
      return new Response(
        JSON.stringify({ message: "Please fill all required fields" }),
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboard@mailer.nextgenconsultancy.in",
        to: "aditya@nextgenbusiness.co.in",
        subject: "New Contact Form Submission",
        html: `
          <h3>Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Resend API error: ${res.status} - ${errorText}`);
    }

    return new Response(
      JSON.stringify({ message: "✅ Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Something went wrong!",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
