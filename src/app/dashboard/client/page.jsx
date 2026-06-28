import React from "react";
import InfoTrace from "../InfoTrace";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ClientDashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("Session Data:", session);
  const user = session?.user;
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h3 className="text-3xl font-bold">Client Dashboard</h3>
      <p>Welcome, {session?.user?.name}! This is your client dashboard.</p>
      <InfoTrace user={user} />
    </div>
  );
};

export default ClientDashboard;
