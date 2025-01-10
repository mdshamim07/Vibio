import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { PostModel } from "@/models/PostModel";
import { UserModel } from "@/models/UserModel";

export default async function getPostById(userId) {
  try {
    await dbConnect();
    const response = await PostModel.find({ user: userId }).populate({
      path: "user",
      model: UserModel,
      select: ["firstName", "lastName", "avatar"],
    });
    return formateMongo(response);
  } catch (err) {
    return {
      error: true,
      ok: false,
      message: err.message,
    };
  }
}
