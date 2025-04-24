import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Contact Form <test@resend.dev>", // use a verified domain on Resend
      to: "zevinsca@gmail.com",
      subject: `Message from ${name}`,
      replyTo: email,
      text: `
              Name: ${name}
              Email: ${email}
              Phone: ${phone}
              Message:
              ${message}
            `,
    });

    console.log(response);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return Response.json(
        { success: false, error: error.message || "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
