import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { StoryModel } from "@/models/StoryModel";
import { UserModel } from "@/models/UserModel";

export default async function getStories() {
  await dbConnect();
  try {
    const response = await StoryModel.find({ audience: "public" })
      .lean()
      .populate({
        path: "user",
        model: UserModel,
        select: ["avatar", "firstName", "lastName"],
      });
    return formateMongo(response);
  } catch (err) {
    return {
      ok: false,
      error: err.message,
      error: true,
    };
  }
}
