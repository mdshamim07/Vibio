import { NextResponse } from "next/server";

export default function getResponse(status, ok, message, data) {
  return NextResponse.json(
    {
      status,
      ok,
      message,
      data,
    },
    {
      status: status,
    }
  );
}
