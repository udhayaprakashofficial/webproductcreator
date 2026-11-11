type InquiryEmail = {
  name: string;
  contact: string;
  need: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendInquiryEmail(data: InquiryEmail) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail =
    process.env.BREVO_TO_EMAIL ?? "webproductcreator@gmail.com";
  const senderEmail =
    process.env.BREVO_SENDER_EMAIL ?? "webproductcreator@gmail.com";
  const senderName = process.env.BREVO_SENDER_NAME ?? "Web Product Creator";

  if (!apiKey) {
    throw new Error("Missing BREVO_API_KEY");
  }

  const htmlContent = `
    <html>
      <body style="font-family:Arial,sans-serif;line-height:1.5;color:#300a28">
        <h2 style="margin:0 0 12px">New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email / phone:</strong> ${escapeHtml(data.contact)}</p>
        <p><strong>Need:</strong> ${escapeHtml(data.need)}</p>
        <p><strong>Details:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </body>
    </html>
  `;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          name: "Web Product Creator",
        },
      ],
      replyTo: {
        email: data.contact.includes("@") ? data.contact : senderEmail,
        name: data.name,
      },
      subject: `New enquiry from ${data.name} — ${data.need}`,
      htmlContent,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Brevo error ${response.status}: ${errorBody}`);
  }

  return response.json();
}
