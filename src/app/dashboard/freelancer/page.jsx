// import InfoTrace from "@/Components/Shared/dashboard/InfoTrace";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React, { Suspense } from "react";
import InfoTrace from "../InfoTrace";
import { Spinner } from "@heroui/react";
import { redirect } from "next/navigation";

const FreelancerPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "freelancer") {
    redirect("/unauthorize");
  }
  if (session?.user?.userState === "blocked") {
    redirect("/access-blocked");
  }

  return (
    <div>
      <div className="w-11/12 mx-auto mt-5">
        <h3 className="text-3xl font-bold">Freelancer Dashboard</h3>
        <p>
          Welcome, {session?.user?.name}! This is your freelancer dashboard.
        </p>
        <Suspense
          fallback={
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted">...Loading</span>
            </div>
          }
        >
          <InfoTrace />
        </Suspense>
      </div>
    </div>
  );
};

export default FreelancerPage;
