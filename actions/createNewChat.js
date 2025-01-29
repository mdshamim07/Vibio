"use server";

import { chatModel } from "@/models/chatModel";
import { getUser } from ".";
import { dbConnect } from "@/connection/dbConnect";

export async function createNewChatAction(receiverId, message, media) {
  try {
    await dbConnect();
    const user = await getUser();
    const newChat = {
      sender: user?._id,
      receiver: receiverId,
      text: message,
    };
    const response = await chatModel.create(newChat);
    console.log(response);
  } catch (err) {
    console.log(err.message);

    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
