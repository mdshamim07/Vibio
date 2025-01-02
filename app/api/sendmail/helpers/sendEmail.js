import nodemailer from "nodemailer";
export default async function sendEmail(userEmail, otp, userName) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "codingshamim@gmail.com",
        pass: "xsaqvajhqiestlnw",
      },
    });
    const receiver = {
      from: "codingshamim@gmail.com",
      to: userEmail,
      subject: "Your One-Time Password for Vibio",
      html: `<div style="max-width: 600px; margin: 50px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <div style="background-color: #07beb8; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px; color: #fff;">Welcome to Vibio!</h1>
        </div>
        <div style="padding: 20px; text-align: center;">
            <p style="font-size: 16px; line-height: 1.5; margin: 10px 0; color: #000000;">Hi ${userName},</p>
            <p style="font-size: 16px; line-height: 1.5; margin: 10px 0; color: #000000;">We received a request to verify your email address. Use the OTP below to complete the verification process:</p>
            <div style="display: inline-block; background-color: #f1f1f1; padding: 10px 20px; font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #000000; margin: 20px 0; border-radius: 4px;">${otp}</div>
            <p style="font-size: 16px; line-height: 1.5; margin: 10px 0; color: #000000;">If you did not request this, please ignore this email.</p>
        </div>
        <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 14px;">
            <p style="margin: 0; color: #333333;">&copy; 2024 Vibio. All rights reserved.</p>
            <p style="margin: 0; color: #333333;">
                Visit us at <a href="https://vibio.com" style="color: #07beb8; text-decoration: none;">Vibio</a> |
                Need help? <a href="mailto:support@vibio.com" style="color: #07beb8; text-decoration: none;">Contact Support</a>
            </p>
        </div>
    </div>
    `,
    };
    const response = await transporter.sendMail(receiver);
    if (response?.accepted.length > 0) {
      return {
        ok: true,
        message: "OTP has been sent successfully.",
      };
    } else {
      return {
        ok: false,
        message: "Something went wrong",
        error: true,
      };
    }
  } catch (err) {
    throw new Error(err.message);
  }
}
