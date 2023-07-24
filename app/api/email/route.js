import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const reqBody = await request.json();

    console.log(reqBody);
    const { email, name, message } = reqBody;
    const g = {
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    };
   
    const transport = nodemailer.createTransport({
      ...g
    });

    const mailOptions = {
      from: "rajuweb7@gmail.com",
      to: email,
      subject:
        `New Message form Raju `,
      html:`<html>
      <head>
        <style>
         
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            height: 100vh;
            width: 100%;
            font-family: "Inter", sans-serif;
            background-color: #ffffff;
            color: #1d1d1d;
          }
    
          .main {
            width: 99%;
            height: 99%;
            border: 1px solid #ababab;
            border-radius: 20px;
          }
          img{
            
            margin: 20px;
            width:160px;
    
          }
    
          
          .h2 {
            margin: 20px;
            font-size: 30px;
            font-weight: 400;
          }
          .msg {
            margin: 20px;
            font-size: 30px;
            border-left: 4px solid #c084fc;
            padding-left: 20px;
          }
          .h1 {
            font-size: 40px;
            font-weight: 400;
            margin: 20px;
            border-radius: 5px;
          }
          .email {
            margin: 20px;
            font-size: 30px;
          }
        </style>
      </head>
      <body>
        <div class="main">
    
          <img src="https://rajudev.vercel.app/LogoRaju.png" alt="Logo" >
          <div class="h1">Hey 👋, ${name}</div>
          <div class="h2">We got your message.</div>
          <div class="msg">" ${message} "</div>
          <p class="email">Thankyou 🙏</p>
        </div>
      </body>
    </html>
    `,
    };
    const mailresponse = await transport.sendMail(mailOptions);
        console.log(mailresponse)

    return NextResponse.json({ message: "Thank You!" });
  } catch (error) {
    return NextResponse.json({ message: "Try Again!" });
  }
}
