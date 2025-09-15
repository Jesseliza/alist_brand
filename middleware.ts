import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const authRoutes = ["/login", "/login/otp"];
  const adminRoutes = ["/admin", "/admin/team", "/admin/upgrade-plan"];

  const isAuthRoute = authRoutes.includes(pathname);
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

  // If the user is not authenticated, handle redirects
  if (!token) {
    // If the user is trying to access an admin route, redirect to login with a query param
    if (isAdminRoute) {
      const url = new URL("/login", request.url);
      url.searchParams.set("redirectedFrom", "admin");
      return NextResponse.redirect(url);
    }
    // If the user is trying to access any other protected route, redirect to login
    if (!isAuthRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If the user is authenticated and is trying to access an authentication route, redirect to the dashboard
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect root to dashboard
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: "/",
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
