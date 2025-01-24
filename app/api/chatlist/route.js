import getFriends from "@/queries/getFriends";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const limitOfFriend = req?.nextUrl?.searchParams.get("limit");
    const friends = await getFriends(limitOfFriend);

    return NextResponse.json({
      data: friends,
    });
  } catch (err) {
    return {
      ok: false,
      message: err.message,
      error: true,
    };
  }
}
