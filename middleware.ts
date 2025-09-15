import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const authRoutes = ["/login", "/login/otp"];
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

  if (!token && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }


  // Redirect root to dashboard
  // if (request.nextUrl.pathname === "/") {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  // matcher: "/",
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
