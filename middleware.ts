// import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// const isProtectedPage = (path: string) => {
//   const protectedPaths = ['/docs', '/user'];
//   return protectedPaths.some((protectedPath) => path.startsWith(protectedPath));
// };

// export default clerkMiddleware((req: NextRequest) => {
//   const { userId } = getAuth(req);

//   if (isProtectedPage(req.nextUrl.pathname) && !userId) {
//     const signInUrl = new URL('/sign-in', req.url);
//     signInUrl.searchParams.set('redirect_url', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ['/docs/:path*', '/user/:path*'],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that should be protected
const isProtectedRoute = createRouteMatcher([
  '/docs' // Add any additional routes here
]);// Update clerkMiddleware to manually protect routes

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the route if it matches the defined criteria
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};