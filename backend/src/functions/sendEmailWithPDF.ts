import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
import * as React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { PDFDocument } from "pdf-lib";
import QRCode from "qrcode";

import MyDocument from "./MyDocument";
import { PatientProfile } from "../types/PatientProfileType";

export const sendEmailWithPDF = async (
  patientProfile: PatientProfile,
  email: string,
  certificateId: string,
  certificateHash: string,
) => {
  try {
    let emailAPI = new TransactionalEmailsApi();

    if (!process.env.BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not defined");
    }

    (emailAPI as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    const verificationLink: string = `${process.env.CLIENT_URL}/verify/${certificateId}`;

    const qrCodeDataUrl = await QRCode.toDataURL(verificationLink);

    const initialPdfBuffer: Buffer = await renderToBuffer(
      React.createElement(MyDocument, {
        name: patientProfile.patientName,
        certificateId,
        verificationLink,
        qrCodeDataUrl,
      }) as any,
    );

    const pdfUint8Array: Uint8Array = initialPdfBuffer;

    const pdfDoc = await PDFDocument.load(pdfUint8Array);

    pdfDoc.setSubject(
      JSON.stringify({
        certificateId,
        patientProfile,
        certificateHash,
      }),
    );

    const finalPdfUint8Array: Uint8Array = await pdfDoc.save();

    const finalPdfBuffer: Buffer = Buffer.from(finalPdfUint8Array);

    const base64Pdf = finalPdfBuffer.toString("base64");

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
