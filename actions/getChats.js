"use server";
import formateMongo from "@/app/api/helpers/formateMongo";
import { dbConnect } from "@/connection/dbConnect";
import { chatModel } from "@/models/chatModel";
import { getUser } from ".";
import { UserModel } from "@/models/UserModel";

export default async function getChats() {
  const user = await getUser();
  await dbConnect();
  try {
    const response = await chatModel
      .find({ receiver: user?._id })
      .populate({
        model: UserModel,
        path: "receiver",
        select: ["avatar", "firstName", "lastName"],
      })
      .populate({
        model: UserModel,
        path: "user",
        select: ["avatar", "firstName", "lastName"],
      })
      .populate({
        model: UserModel,
        path: "sender",
        select: ["avatar", "firstName", "lastName"],
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
