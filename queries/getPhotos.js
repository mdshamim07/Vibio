import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { PostModel } from "@/models/PostModel";

export default async function getPhotos(userId) {
  if (!userId) {
    throw new Error("userId is required");
  }

  await dbConnect();

  try {
    const response = await PostModel.find({
      user: userId, // Filter by userId
      postImages: { $exists: true, $ne: [] }, // Ensure postImages exists and is not empty
    });

    return formateMongo(response); // Format the response
  } catch (error) {
    return {
      ok: false,
      message: error.message,
      error: true,
    };
  }
}
