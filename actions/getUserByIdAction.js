"use server";

import getUserById from "@/queries/getUserById";

export default async function getUserByIdAction(id) {
  try {
    const response = await getUserById(id);
    return response;
  } catch (err) {
    return {
      ok: false,
      error: true,
      message: err.message,
    };
  }
}
