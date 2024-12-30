"use server";

import postData from "@/utils/postData";

export async function createUserAction(data) {
  try {
    const response = await postData(
      `${process.env.API_KEY}/${process.env.SIGN_UP_URI}`,
      data
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
