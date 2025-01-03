"use server";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import generateOtp from "@/utils/generateOtp";
import postData from "@/utils/postData";
const newOtp = generateOtp();
export default async function sendResetLinkAction(email) {
  try {
    await dbConnect();
    if (!email) {
      return {
        ok: false,
        error: true,
        message: "Please enter your email!",
      };
    } else {
      const user = await UserModel.find({ email: email });

      if (user.length > 0) {
        const response = await UserModel.updateOne(
          { email: email },
          {
            otp: newOtp,
            active: false,
          }
        );
        const updatedUser = await UserModel.find({ email: email });
        if (response?.modifiedCount > 0) {
          const otpResponse = await postData(
            `${process.env.API_KEY}/${process.env.OTP_URI}`,
            {
              email: user[0]?.email.trim(),
              otp: updatedUser[0]?.otp,
              name: user[0]?.firstName + " " + user[0]?.lastName,
            }
          );
          if (otpResponse.ok) {
            return {
              ok: true,
              message: "Successfully sent otp",
            };
          } else {
            return {
              ok: false,
              message: "Something went wrong while sending otp..",
            };
          }
        }
      } else {
        return {
          ok: false,
          error: true,
          message: "Invalid email address!",
        };
      }
    }
  } catch (err) {
    return {
      error: true,
      ok: false,
      message: err.message,
    };
  }
}
