import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILES = 5;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20 MB

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
];

function generateReference() {
  const now = new Date();

  const year = now.getFullYear();

  const unique = Date.now()
    .toString()
    .slice(-6);

  return `SK-${year}-${unique}`;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const reference = generateReference();

    const name =
      String(formData.get("name") || "").trim();

    const existingCustomer =
      String(formData.get("existingCustomer") || "No");

    const email =
      String(formData.get("email") || "").trim();

    const phone =
      String(formData.get("phone") || "").trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return NextResponse.json(
    { error: "Please enter a valid email address." },
    { status: 400 }
  );
}

const phoneDigits = phone.replace(/\D/g, "");

if (phoneDigits.length < 8) {
  return NextResponse.json(
    { error: "Please enter a valid phone number." },
    { status: 400 }
  );
}

    const service =
      String(formData.get("service") || "").trim();

    const postcode =
      String(formData.get("postcode") || "").trim();

    const address =
      String(formData.get("address") || "").trim();

    const description =
      String(formData.get("description") || "").trim();
      const website =
  String(formData.get("website") || "").trim();

    const privacy =
      formData.get("privacy");
      const turnstileToken =
  String(formData.get("turnstileToken") || "");

    if (!name)
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );

    if (!email)
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );

    if (!phone)
      return NextResponse.json(
        { error: "Phone is required." },
        { status: 400 }
      );

    if (!service)
      return NextResponse.json(
        { error: "Please select a service." },
        { status: 400 }
      );

    if (!postcode)
      return NextResponse.json(
        { error: "Postcode is required." },
        { status: 400 }
      );

    if (!description)
      return NextResponse.json(
        { error: "Description is required." },
        { status: 400 }
      );

    if (!privacy)
      return NextResponse.json(
        {
          error:
            "You must accept the Privacy Policy.",
        },
        { status: 400 }
      );

      if (!turnstileToken) {
  return NextResponse.json(
    {
      error: "Please complete the security verification.",
    },
    {
      status: 400,
    }
  );
}
const verificationResponse = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: turnstileToken,
    }),
  }
);

const verificationResult = await verificationResponse.json();

if (!verificationResult.success) {
  return NextResponse.json(
    {
      error: "Security verification failed. Please try again.",
    },
    {
      status: 400,
    }
  );
}
if (website) {
  return NextResponse.json(
    {
      error: "Spam detected.",
    },
    {
      status: 400,
    }
  );
}
          const files = formData
      .getAll("photos")
      .filter(
        (file): file is File =>
          file instanceof File && file.size > 0
      );

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        {
          error: `Maximum ${MAX_FILES} photos allowed.`,
        },
        { status: 400 }
      );
    }

    let totalSize = 0;

    const attachments: {
      filename: string;
      content: Buffer;
      contentType: string;
    }[] = [];

    for (const file of files) {
      totalSize += file.size;

      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          {
            error: `Unsupported file type: ${file.name}`,
          },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(
        await file.arrayBuffer()
      );

      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        {
          error:
            "Maximum total upload size is 20 MB.",
        },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString(
      "en-GB",
      {
        dateStyle: "full",
        timeStyle: "short",
      }
    );

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">

<div style="max-width:700px;margin:auto;background:#ffffff;border-radius:12px;padding:40px;">

<h1 style="color:#000;margin-bottom:10px;">
New Quote Request
</h1>

<p style="font-size:18px;font-weight:bold;color:#d4a017;">
Reference: ${reference}
</p>

<hr>

<h3>Customer Details</h3>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Existing Customer:</strong> ${existingCustomer}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Phone:</strong> ${phone}</p>

<hr>

<h3>Job Details</h3>

<p><strong>Service:</strong> ${service}</p>

<p><strong>Postcode:</strong> ${postcode}</p>

<p><strong>Address:</strong> ${address || "-"}</p>

<p><strong>Description:</strong></p>

<p style="white-space:pre-wrap;">
${description}
</p>

<hr>

<p><strong>Photos Attached:</strong> ${attachments.length}</p>

<p><strong>Submitted:</strong> ${submittedAt}</p>
<hr>

<p style="margin-top:30px;color:#666;font-size:13px;">
This email was automatically generated by the SKFIX website.
</p>

</div>

</body>
</html>
`;

    await transporter.sendMail({
      from: `"SKFIX Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New Quote Request | ${reference}`,
      html,
      attachments,
    });

    return NextResponse.json({
      success: true,
      reference,
      message: "Your enquiry has been sent successfully.",
    });
     } catch (error) {
  console.error("========== SMTP ERROR ==========");
  console.error(error);
  console.error("================================");

  return NextResponse.json(
    {
      success: false,
      error:
        "Something went wrong while sending your enquiry. Please try again later.",
    },
    {
      status: 500,
    }
  );
}
}