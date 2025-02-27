"use server";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { chatModel } from "@/models/chatModel";
import { getUser } from ".";

export default async function getChats(receiverId, lastFetchedTime) {
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

    // If lastFetchedTime is provided, filter messages sent after that timestamp
    if (lastFetchedTime) {
      query.createdAt = { $gt: new Date(lastFetchedTime) };
    }

    const response = await chatModel
      .find(query)
      .sort({ createdAt: 1 }) // Sort by createdAt for chronological order
      .populate("sender", "avatar firstName lastName")
      .populate("receiver", "avatar firstName lastName");

    const formattedResponse = formateMongo(response);

    return formattedResponse;
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
