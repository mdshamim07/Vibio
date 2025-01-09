import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { CommentModel } from "@/models/CommentModel";
import { UserModel } from "@/models/UserModel";

export default async function getCommentByPostId(id) {
  try {
    await dbConnect();
    const response = await CommentModel.find({ postId: id }).populate({
      model: UserModel,
      path: "user",
      select: ["firstName", "lastName", "avatar"],
    });
    return formateMongo(response);
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
}
