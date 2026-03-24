"use server";

import nodemailer from "nodemailer";

interface EchoesFormState {
  success: boolean;
  error: string | null;
}

export async function sendEchoesInterest(
  _prevState: EchoesFormState,
  formData: FormData
): Promise<EchoesFormState> {
  const facilityName = formData.get("facilityName") as string;
  const contactName = formData.get("contactName") as string;
  const title = formData.get("title") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const seniorCount = formData.get("seniorCount") as string;
  const comments = formData.get("comments") as string;

  if (!facilityName || !contactName || !title || !email || !phone || !address) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"TRECS Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "JohnWhitman@theTRECSinstitute.org",
      subject: `Echoes Between Ages — New Facility Interest: ${facilityName}`,
      text: `Facility Name: ${facilityName}\nContact Person: ${contactName}\nTitle/Position: ${title}\nEmail: ${email}\nPhone: ${phone}\nFacility Address: ${address}\nPotential Senior Participants: ${seniorCount || "Not specified"}\n\nComments:\n${comments || "None"}`,
      html: `
        <h2>Echoes Between Ages — New Facility Interest</h2>
        <hr />
        <p><strong>Facility Name:</strong> ${facilityName}</p>
        <p><strong>Contact Person:</strong> ${contactName}</p>
        <p><strong>Title/Position:</strong> ${title}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Facility Address:</strong> ${address}</p>
        <p><strong>Potential Senior Participants:</strong> ${seniorCount || "Not specified"}</p>
        <hr />
        <p><strong>Additional Comments/Questions:</strong></p>
        <p>${comments ? comments.replace(/\n/g, "<br />") : "None"}</p>
      `,
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Failed to send your submission. Please try again or email us directly.",
    };
  }
}
