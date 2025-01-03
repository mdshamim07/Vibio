"use server";

import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import { getUser } from ".";
import { revalidatePath } from "next/cache";

export async function updateProfileInfo(typeOfChanges, value) {
  await dbConnect();
  try {
    if (value.length === 0) {
      return {
        ok: false,
        message: "Please enter your" + " " + typeOfChanges,
      };
    } else {
      const user = await getUser();

      const updateQuery = {
        $set: { [`about.${typeOfChanges}`]: value },
      };
      const response = await UserModel.updateOne(
        { email: user?.email },
        updateQuery
      );
      if (response.modifiedCount > 0) {
        revalidatePath("/");
        return {
          ok: true,
          message: "Successfully updated ",
        };
      } else {
        return {
          ok: false,
          message: "something went wrong !",
        };
      }
    }
  } catch (err) {
    return {
      ok: false,
      error: true,
      message: err.message,
    };
  }
}