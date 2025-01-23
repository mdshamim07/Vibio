import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import mongoose from "mongoose";

export default async function getUserById(userId) {
  try {
    // Validate the userId before proceeding
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    }

    await dbConnect();
    const data = await UserModel.findById(userId).select([
      "firstName",
      "lastName",
      "email",
      "about",
      "avatar",
    ]);

    if (!data) {
      throw new Error("User not found.");
    }

    return formateMongo(data);
  } catch (err) {
    // Log the error for debugging
    return {
      ok: false,
      message: err.message,
      error : true
    };
  }
}
