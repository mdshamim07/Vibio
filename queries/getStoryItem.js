import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { StoryModel } from "@/models/StoryModel";

export default async function getStoryItem(id) {
  await dbConnect();
  try {
    const response = await StoryModel.findById(id).lean();
    return formateMongo(response)
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error : true,
    };
  }
}
