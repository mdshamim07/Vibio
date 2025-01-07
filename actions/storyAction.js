"use server";

import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { StoryModel } from "@/models/StoryModel";

export async function createNewStoryAction(data) {
  await dbConnect();
  try {
    const respnse = await StoryModel.create(data);

    const formatedObj = formateMongo(respnse);
    if (respnse) {
      return {
        ok: true,
        message: "Story created!",
        id: formatedObj?._id,
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
