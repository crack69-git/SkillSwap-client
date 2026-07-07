import React, { Suspense } from "react";
import InfoTrace from "../InfoTrace";
import { Spinner } from "@heroui/react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      <p>
        Welcome to the admin dashboard! Here you can manage users, tasks, and
        view transaction history.
      </p>
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted">...Loading</span>
          </div>
        }
      >
        <div className="mt-5">
          <InfoTrace user={user} />
        </div>
      </Suspense>
    </div>
  );
};

export default AdminPage;
