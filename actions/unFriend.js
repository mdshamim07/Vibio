"use server";

import { dbConnect } from "@/connection/dbConnect";
import { RequestListModel } from "@/models/RequestListModel";
import { revalidatePath } from "next/cache";
import { getUser } from "@/actions"; // Assuming you have this to get the logged-in user's details

export async function unFriend(friendId) {
  try {
    await dbConnect();
    const user = await getUser();

    if (!user?._id) {
      return {
        ok: false,
        message: "User not authenticated.",
        error: true,
      };
    }

    // Attempt to delete the friendship based on both users' IDs
    const response = await RequestListModel.deleteOne({
      $or: [
        { requestedUserId: user._id, recipient: friendId },
        { requestedUserId: friendId, recipient: user._id },
      ],
    });

    if (response.deletedCount > 0) {
      // Revalidate the path to update the UI
      revalidatePath("/");
      return {
        ok: true,
        message: "Friend successfully removed.",
      };
    }

    // Handle case where no document was deleted
    return {
      ok: false,
      message: "No friend found to remove.",
    };
  } catch (err) {
    // Handle errors gracefully
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
