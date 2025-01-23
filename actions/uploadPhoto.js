"use server";

import { UserModel } from "@/models/UserModel";
import { getUser } from ".";
import { dbConnect } from "@/connection/dbConnect";
import { revalidatePath } from "next/cache";

export async function uploadPhoto(imageText) {
  try {
    const user = await getUser();
    if (user) {
      await dbConnect();
      const response = await UserModel.updateOne(
        { _id: user?._id },
        { avatar: imageText }
      );

      if (response.modifiedCount > 0) {
        revalidatePath("/");
        return {
          ok: true,
          id: user?._id,
          message: "Profile Pic uploded!",
        };
      }
    } else {
      return {
        ok: false,
        message: "Please login first",
      };
    }
  } catch (err) {
    return {
      error: true,
      ok: false,
      message: err.message,
    };
  }
}
