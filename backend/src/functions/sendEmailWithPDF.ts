import nodemailer from "nodemailer";
import * as React from "react";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

type EmailOptions = {
  to: string;
  subject: string;
  text: string;
};

export const sendEmailWithPDF = async (
  emailOptions: EmailOptions,
  patientName: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const pdfBuffer: any = await pdf(
      React.createElement(MyDocument, { name: patientName }) as any
    ).toBuffer();

    const info = await transporter.sendMail({
      from: '"Sender Name" azuboguko@gmail.com',
      to: emailOptions.to,
      subject: emailOptions.subject,
      text: emailOptions.text,
      attachments: [
        {
          filename: "Medical Fitness Certificate.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    if (info) {
      console.log("here's our info: ", info);
      return "Email sent successfully!";
    }
  } catch (error) {
    console.log("here's our error: ", error);
    throw error;
  }
};
