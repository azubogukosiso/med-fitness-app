import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
import * as React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

export const sendEmailWithPDF = async (
  patientName: string,
  doctorSignature: string
) => {
  try {
    let emailAPI = new TransactionalEmailsApi();

    if (!process.env.BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not defined");
    }

    (emailAPI as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    const pdfBuffer: any = await renderToBuffer(
      React.createElement(MyDocument, {
        name: patientName,
        signature: doctorSignature,
      }) as any
    );

    const base64Pdf = await pdfBuffer.toString("base64");

    let message = new SendSmtpEmail();
    message.subject = "Your Medical Fitness Certificate";
    message.textContent =
      "Please find your medical fitness certificate attached below.";
    message.sender = {
      name: "ESUT Medical Center",
      email: "azuboguko@gmail.com",
    };
    message.to = [{ email: "azuboguko@gmail.com", name: "Kosiso Azubogu" }];
    message.attachment = [
      {
        name: "Medical Fitness Certificate.pdf",
        content: base64Pdf,
      },
    ];

    const response = await emailAPI.sendTransacEmail(message);

    if (response) {
      return "Email sent successfully!";
    }
  } catch (error) {
    console.log("Error sending email with PDF:", error);
    throw error;
  }
};
