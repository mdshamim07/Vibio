import { dbConnect } from "@/connection/dbConnect";
import { PostModel } from "@/models/PostModel";
import { NextResponse } from "next/server";
import formateMongo from "../helpers/formateMongo";
import getResponse from "../helpers/getResponse";
import { UserModel } from "@/models/UserModel";

export async function GET(req) {
  try {
    const limitOfPost = req?.nextUrl?.searchParams.get("limit");

    await dbConnect();
    const data = await PostModel.find({})
      .sort({ createdAt: -1 })
      .populate({
        model: UserModel,
        path: "user",
        select: ["firstName", "lastName", "email", "dateOfBirth", "avatar"],
      })
      .limit(limitOfPost);
    if (data) {
      return NextResponse.json({
        total: data.length,
        ok: true,
        data: formateMongo(data),
      });
    } else {
      return getResponse(404, true, "no data found", []);
    }
  } catch (err) {
    return getResponse(404, false, err.message, []);
  }
}
