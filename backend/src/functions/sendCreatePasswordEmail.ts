import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

export const sendCreatePasswordEmail = async (
  emailAddress: string,
  userId: string,
) => {
  try {
    console.log(
      "Sending create password email to:",
      emailAddress,
      "with userId:",
      userId,
    );

    let emailAPI = new TransactionalEmailsApi();

    if (!process.env.BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not defined");
    }

    (emailAPI as any).authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    let message = new SendSmtpEmail();
    message.subject = "Create A Password For Your Account";
    message.htmlContent = `<html><head></head><body style="font-size: 16px;"><p>Your email has been successfully verified!</p><p>You can now create a password for your patient account.</p><p>Click this link to create your password: <br></br> <a style="background-color: blue; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;" href="${process.env.CLIENT_URL}/create-password?id=${userId}">Create Password</a></p><p>If you didn't request this, please ignore this email.</p></body></html>`;
    message.sender = {
      name: "ESUT Medical Center",
      email: "azuboguko@gmail.com",
    };
    message.to = [{ email: "directorictc@esut.edu.ng", name: "Name of Director" }];

    const response = await emailAPI.sendTransacEmail(message);

    if (response) {
      return "Email sent successfully!";
    }
  } catch (error) {
    console.log("Error sending email with PDF:", error);
    throw error;
  }
};
