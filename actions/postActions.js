"use server";

import { PostModel } from "@/models/PostModel";
import { getUser, updatePassword } from ".";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import { revalidatePath } from "next/cache";

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
export async function getLikes(postId) {
  const user = await getUser();
  await dbConnect();
  try {
    const response = await PostModel.find({ _id: postId });
    const formated = formateMongo(response[0]);
    const isLiked = formated.likes.find((like) => like?.user === user?._id);

    return {
      totalLikes: formated.likes.length,
      liked: isLiked ? true : false,
    };
  } catch (err) {
    return {
      error: true,
      message: err.message,
      ok: false,
    };
  }
}

export async function addNewLikeAction(postId) {
  try {
    await dbConnect();
    const user = await getUser();
    const newLike = {
      user: user?._id,
    };
    const post = await PostModel.findById(postId);
    const formatedObj = formateMongo(post);
    const isLiked = formatedObj?.likes.find((like) => like?.user === user?._id);
    if (isLiked) {
      const updatedPost = await PostModel.findByIdAndUpdate(
        postId,
        { $pull: { likes: { _id: isLiked?._id } } }, // Pull the comment with the matching `_id`
        { new: true } // Return the updated document
      );
      if (updatedPost) {
        revalidatePath("/");
      }
    } else {
      post.likes.push(newLike);
      await post.save();
      revalidatePath("/");
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}

export async function deletePostAction(postid) {
  try {
    await dbConnect();
    const response = await PostModel.deleteOne({ _id: postid });
    if (response.deletedCount > 0) {
      revalidatePath("/");
      return {
        ok: true,
        message: "successfully deleted!",
      };
    } else {
      return {
        ok: false,
        message: "something went wrong!",
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
