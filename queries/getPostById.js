import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { PostModel } from "@/models/PostModel";
import { UserModel } from "@/models/UserModel";

export default async function getPostById(userId) {
  try {
    // Ensure database connection
    await dbConnect();

    // Fetch posts by user ID with user details populated
    const posts = await PostModel.find({ user: userId }).populate({
      path: "user",
      model: UserModel,
      select: ["firstName", "lastName", "avatar", "about"], // Select only required fields
    });

    return formateMongo(posts);
  } catch (err) {
    // Log the error for debugging

    // Return an error response
    return {
      error: true,
      ok: false,
      message: err.message || "An unexpected error occurred.",
    };
  }
}
