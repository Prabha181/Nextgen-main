export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  try {
    const body = req.body;

    // Normalize fields (handle different names)
    const firstName = body.firstName || body.name || "";
    const lastName = body.lastName || "";
    const email = body.email || "";
    const phone = body.phone || body.mobile || "";
    const inquiryType = body.inquiryType || "General Inquiry";
    const site = "Nextgen Consultancy";
    const company = body.company || "";

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Prepare payload for mail worker
    const payload = {
      to: 'you@example.com',
      from: email,
      subject: `${inquiryType} from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nSite: ${site}`,
    };

    const response = await fetch('https://resend-mail-worker.vatsal-9e7.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return res.status(response.status).json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
