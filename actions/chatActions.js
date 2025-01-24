"use server";

import getFriends from "@/queries/getFriends";

export async function getChatList(limit) {
  try {
    const response = await getFriends(limit);
    return response;
  } catch (err) {
    return err;
  }
}
