"use server";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { chatModel } from "@/models/chatModel";
import { getUser } from ".";

export default async function getChatFirstItem(receiverId) {
  const user = await getUser();
  const userId = user?._id;

  if (!userId) {
    return {
      ok: false,
      message: "User not authenticated",
      error: true,
    };
  }

  await dbConnect();

  try {
    const query = {
      $or: [
        { sender: userId, receiver: receiverId },
        { sender: receiverId, receiver: userId },
      ],
    };

    const response = await chatModel
      .find(query)
      .sort({ createdAt: 1 }) // Sort by createdAt for chronological order
      .populate("sender", "avatar firstName lastName")
      .populate("receiver", "avatar firstName lastName");
    const firstItem = response[response?.length - 1];
    return formateMongo(firstItem);
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
