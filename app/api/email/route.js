import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import UserEmail from "./UserEmail";
import AdminEmail from "./AdminEmail";
export async function POST(request) {
  try {
    const reqBody = await request.json();

    const { email, name, message } = reqBody;
    const g = {
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    };

    const transport = nodemailer.createTransport({
      ...g,
    });

    const userHtml = render(<UserEmail username={name} message={message} />);
    const adminHtml = render(<AdminEmail username={name} message={message} email={email}/>);

    const replay = {
      from: "mail@rajumaurya.com",
      to: email,
      subject: `New Message form Raju. `,
      html: userHtml,
    };
    const selfMail = {
      from: "mail@rajumaurya.com",
      to: "mail@rajumaurya.com",
      subject: `Raju potfoilo`,
      html: adminHtml,
    };
    await transport.sendMail(replay);

    await transport.sendMail(selfMail);

    return NextResponse.json({ status: 200, message: "Thank You!" });
  } catch (error) {
    return NextResponse.json({ status: 404, message: "Try Again!" });
  }
}
