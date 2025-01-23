"use server";

import { PostModel } from "@/models/PostModel";
import { getUser } from ".";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { UserModel } from "@/models/UserModel";
import { revalidatePath } from "next/cache";
import fetchData from "@/utils/fetchData";
import postData from "@/utils/postData";
import { notificationModel } from "@/models/NotificationModel";
import addNewNotification from "./addNewNotification";

export async function createNewPost(data) {
  await dbConnect();
  try {
    const user = await getUser();

    if (user?._id) {
      const result = await postData(process.env.PHOTO_UPLOAD, {
        images: data?.images,
      });
      const newPost = {
        user: user?._id,
        postImages: result?.files,
        ...data,
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

export async function addNewLikeAction(postId, postUserId) {
  try {
    await dbConnect();
    const user = await getUser();
    if (!user?._id) {
      throw new Error("User not authenticated");
    }

    const post = await PostModel.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    const isLiked = post.likes.find(
      (like) => like.user.toString() === user._id
    );

    if (isLiked) {
      // Remove like
      await PostModel.findByIdAndUpdate(
        postId,
        { $pull: { likes: { user: user._id } } }, // Match by user ID
        { new: true } // Return the updated document
      );

      revalidatePath("/"); // Revalidate the page
      return { ok: true, message: "Like removed successfully" };
    } else {
      // Add new like
      post.likes.push({ user: user._id });
      await post.save();

      // Create a notification for the post owner
      const response = await addNewNotification(
        user?._id,
        "like",
        `${user.firstName} ${user.lastName} reacted to your post`,
        "Post",
        postId,
        postUserId
      );
      console.log(response);
      revalidatePath("/"); // Revalidate the page
      return { ok: true, message: "Post liked successfully" };
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
export async function getPosts() {
  try {
    const response = await fetchData(
      `${process.env.API_KEY}/${process.env.POSTS_API}`
    );
    return response;
  } catch (err) {
    return {
      error: true,
      message: err.message,
      ok: false,
    };
  }
}
