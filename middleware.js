import { NextResponse } from "next/server";
import { PRIVATE_ROUTES } from "./routes";

export async function middleware(req) {
  const userCookie = req.cookies.get("user");

  // Use a for...of loop for early return
  for (const route of PRIVATE_ROUTES) {
    if (route === req.nextUrl.pathname && !userCookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If no match, continue the request as normal
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/friends", "/uploadavatar"],
};
