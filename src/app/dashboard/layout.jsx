import DashboardSideBar from "@/Components/Shared/dashboard/DashboardSideBar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex  min-h-screen ">
      <DashboardSideBar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
