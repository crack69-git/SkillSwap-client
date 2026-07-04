import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/browse-freelancer",
    "/dashboard/client",
    "/dashboard/client/post-task",
    "/dashboard/client/my-tasks",
    "/dashboard/client/manage-proposals",
    "/dashboard/freelancer",
    "/dashboard/freelancer/my-proposals",
    "/dashboard/freelancer/my-earnings",
    "/dashboard/freelancer/edit-profile",
    "/dashboard/admin",
    "/dashboard/admin/manage-users",
    "/dashboard/admin/manage-tasks",
    "/dashboard/admin/transections-history",
    "/success",
  ],
};
