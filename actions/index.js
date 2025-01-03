"use server";
import postData from "@/utils/postData";
import { cookies } from "next/headers";
import verifyOtpQuery from "@/queries/verifyOtp";
import getUserById from "@/queries/getUserById";
import { UserModel } from "@/models/UserModel";
import { dbConnect } from "@/connection/dbConnect";
import bcrypt from "bcrypt";
import formateMongo from "@/app/api/helpers/formateMongo";
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

export async function verifyResetFormOtp(email, otp) {
  await dbConnect();
  const userInfo = await UserModel.find({ email: email });
  if (userInfo.length > 0) {
    const isMatched = userInfo[0]?.otp === parseInt(otp);
    if (isMatched) {
      const response = await UserModel.updateOne(
        { email: email },
        {
          otp: process.env.VALID_OTP,
          password: "",
        }
      );
      if (response.modifiedCount > 0) {
        return {
          ok: true,
          message: "Successfully reset the password",
        };
      }
    } else {
      return {
        error: true,
        ok: false,
        message: "Invalid otp!",
      };
    }
  } else {
    return {
      error: true,
      ok: false,
      message: "user not found!",
    };
  }
}

export async function updatePassword(email, password) {
  const cookieStore = await cookies();
  try {
    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    await dbConnect();
    const updateUserPassword = await UserModel.updateOne(
      { email: email },
      { password: hashedPassword }
    );
    if (updateUserPassword.modifiedCount > 0) {
      const user = await UserModel.find({ email: email });
      const parsed = formateMongo(user);
      cookieStore.set("user", parsed[0]?._id);
      return {
        ok: true,
        message: "Your password has been changed!",
      };
    } else {
      return {
        ok: false,
        error: true,
        message: "Something went wrong while changing password!",
      };
    }
  } catch (err) {
    return {
      ok: false,
      error: true,
      message: err.message,
    };
  }
}
