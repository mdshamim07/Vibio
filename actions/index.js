"use server";
import postData from "@/utils/postData";
import { cookies } from "next/headers";
import verifyOtpQuery from "@/queries/verifyOtp";
import { UserModel } from "@/models/UserModel";

export async function createUserAction(data) {
  try {
    const response = await postData(
      `${process.env.API_KEY}/${process.env.SIGN_UP_URI}`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function verifyOtp(userId, otp) {
  const cookieStore = await cookies();
  try {
    if (otp.length < 6) {
      throw new Error("Invalid otp!");
    } else {
      const response = await verifyOtpQuery(userId, otp);
      if (response.ok || response.ok === "validuser") {
        cookieStore.set("user", response?.user);
      }
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function getUser() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user");
  const userId = cookie.value;
  const user = await getUser(userId);
  console.log(user);
}
