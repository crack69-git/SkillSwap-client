import React from "react";
import InfoTrace from "../InfoTrace";

const AdminPage = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Admin Dashboard</h2>
      <p>
        Welcome to the admin dashboard! Here you can manage users, tasks, and
        view transaction history.
      </p>
      <div className="mt-5">
        <InfoTrace />
      </div>
    </div>
  );
};

export default AdminPage;
