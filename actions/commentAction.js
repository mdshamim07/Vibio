"use server";
import { CommentModel } from "@/models/CommentModel";
import { getUser } from ".";
import { revalidatePath } from "next/cache";
import { dbConnect } from "@/connection/dbConnect";

export async function addComment(comment, postId) {
  try {
    await dbConnect();
    const user = await getUser();
    const newComment = {
      ...comment,
      user: user?._id,
      postId,
    };
    const response = await CommentModel.create(newComment);
    if (response) {
      revalidatePath("/");
      return {
        ok: true,
        message: "Comment Added..",
      };
    } else {
      return {
        ok: false,
        message: "Something went Wrong!",
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
