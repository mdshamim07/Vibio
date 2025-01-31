"use server";
import { chatModel } from "@/models/chatModel";
import { getUser } from ".";
import { dbConnect } from "@/connection/dbConnect";
import { revalidatePath } from "next/cache";

export async function createNewChatAction(receiverId, message, media) {
  try {
    const user = await getUser();
    if (!user) {
      return {
        ok: false,
        message: "User not authenticated",
        error: true,
      };
    }
    await dbConnect();
    const newChat = {
      sender: user._id,
      receiver: receiverId,
      text: message,
      media: media || null,
      user: user?._id,
    };
    const response = await chatModel.create(newChat);
    revalidatePath("/");

    return {
      ok: true,
      message: "Chat sent successfully",
    };
  } catch (err) {
   
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
