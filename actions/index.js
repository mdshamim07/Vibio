"use server";
import postData from "@/utils/postData";
import { cookies } from "next/headers";
import verifyOtpQuery from "@/queries/verifyOtp";
import getUserById from "@/queries/getUserById";

export async function createUserAction(data) {
  try {
    const response = await postData(
      `${process.env.API_KEY}/${process.env.SIGN_UP_URI}`,
      data
    );
    return response;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
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
    return {
      error: true,
      message: err.message,
    };
  }
}

export async function getUser() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("user");

  if (!cookie) {
    // Return null or a specific value to indicate no user is logged in
    return null;
  }

  const userId = cookie.value;

  // Add a safeguard to avoid calling getUserById with an empty or invalid userId
  if (!userId) {
    return null;
  }

  try {
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    return {
      error: true,
      message: err.message,
    };
  }
}

export async function logOutAction() {
  (await cookies()).delete("user");
}
