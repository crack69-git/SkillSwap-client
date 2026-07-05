import EditProfileSection from "@/Components/Shared/freelancer/EditProfileSection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
const ProfileEditPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="w-11/12 mx-auto my-5">
      {" "}
      <p className="text-3xl font-bold">Profile Settings</p>
      <p>Update your profile information.</p>
      <EditProfileSection user={session?.user} />
    </div>
  );
};

export default ProfileEditPage;
