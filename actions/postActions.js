"use server";

import { PostModel } from "@/models/PostModel";
import { getUser } from ".";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";

export async function createNewPost(postData) {
  await dbConnect();
  try {
    const user = await getUser();

    if (user?._id) {
      const newPost = {
        user: user?._id,
        ...postData,
      };
      const response = await PostModel.create(newPost);
      const formatedObj = formateMongo(response);
      if (response) {
        return {
          ok: true,
          id: formatedObj?._id,
          message: "New Post created!",
        };
      } else {
        return {
          ok: false,
          error: true,
          message: "Something went wrong!",
        };
      }
    } else {
      return {
        ok: false,
        error: true,
        message: "user not found",
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
export async function getPostById(postId) {
  await dbConnect();
  try {
    const response = await PostModel.findById(postId).populate({
      path: "user",
      model: UserModel,
      select: ["firstName", "lastName", "avatar"],
    });
    return formateMongo(response);
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
