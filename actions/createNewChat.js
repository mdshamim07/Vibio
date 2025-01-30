"use server";

import { chatModel } from "@/models/chatModel";
import { getUser } from ".";
import { dbConnect } from "@/connection/dbConnect";
import { revalidatePath } from "next/cache";

export async function createNewChatAction(receiverId, message, media) {
  try {
    await dbConnect();
    const user = await getUser();
    const newChat = {
      sender: user?._id,
      receiver: receiverId,
      text: message,
      user: user?._id,
    };
    const response = await chatModel.create(newChat);
    revalidatePath("/");
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
