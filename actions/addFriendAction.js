"use server";

import { dbConnect } from "@/connection/dbConnect";
import { RequestListModel } from "@/models/RequestListModel";
import { getUser } from ".";
import { revalidatePath } from "next/cache";
import formateMongo from "@/app/api/helpers/formateMongo";

export async function addFriendAction(requestedUserId) {
  try {
    const user = await getUser();
    await dbConnect();
    const newFriendReq = {
      requestedUserId,
      senderId: user?._id,
      user: user?._id,
    };
    const response = await RequestListModel.create(newFriendReq);
    if (response) {
      revalidatePath("/");
      return {
        ok: true,
        message: "Successfully added to friend",
      };
    } else {
      return {
        ok: false,
        message: "something went wrong!",
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
export async function isAlreadyFriend(friendId) {
  await dbConnect();
  const response = await RequestListModel.find({ requestedUserId: friendId });
  if (response.length > 0) {
    return {
      isFriend: true,
    };
  } else {
    return {
      isFriend: false,
    };
  }
}
export async function cancelFriendAction(friendId) {
  try {
    await dbConnect();
    const response = await RequestListModel.deleteOne({
      requestedUserId: friendId,
    });
    if (response?.deletedCount > 0) {
      revalidatePath("/");
      return {
        ok: true,
        message: "Successfully unfriend",
      };
    } else {
      return {
        ok: false,
        message: "something went wrong !",
      };
    }
  } catch (err) {
    return {
      error: true,
      message: err.message,
      ok: false,
    };
  }
}
export async function getFriendRequestionAction() {
  try {
    const user = await getUser();
    const response = await RequestListModel.find({
      requestedUserId: user?._id,
    });
    return formateMongo(response);
  } catch (err) {
    return {
      error: true,
      message: error.message,
    };
  }
}
