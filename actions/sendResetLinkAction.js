"use server";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import generateOtp from "@/utils/generateOtp";

export default async function sendResetLinkAction(email) {
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
          otp: generateOtp(),
          active: false,
        }
      );
      if (response.ok) {
        return {
          ok: true,
          message: "Successfully sent otp",
        };
      }
    } else {
      return {
        ok: false,
        error: true,
        message: "Invalid email address!",
      };
    }
  }
}
