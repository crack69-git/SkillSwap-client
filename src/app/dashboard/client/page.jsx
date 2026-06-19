"use client";
import InfoTrace from "@/Components/Shared/dashboard/InfoTrace";
import StatUser from "@/Components/Shared/StatUser";
import { useSession } from "@/lib/auth-client";
import React from "react";

const ClientDashboard = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return <p>Loading...</p>;
  }

  // const { user } = session;
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h3 className="text-3xl font-bold">Client Dashboard</h3>
      <p>Welcome, {session?.user?.name}! This is your client dashboard.</p>
      <InfoTrace />
    </div>
  );
};

export default ClientDashboard;
