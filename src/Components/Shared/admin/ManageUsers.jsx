"use client";
import { patchUser } from "@/lib/actions/admin";
import { getToken } from "@/lib/actions/tokenGet";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ManageUsers = ({ user }) => {
  const router = useRouter();
  const handleUserStateChange = async (userId, userState) => {
    const token = await getToken();
    const newState = userState === "unblocked" ? "blocked" : "unblocked";
    const res = await patchUser(userId, { userState: newState }, token);
    if (res.success) {
      alert(`User has been ${newState}`);
      router.refresh();
    } else {
      alert(`Failed to update user state: ${res.message}`);
    }
  };
  return (
    <Table.Row>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>

      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>
        {user.role !== "admin" && (
          <Button
            size="sm"
            onClick={() => handleUserStateChange(user._id, user.userState)}
          >
            {user.userState === "unblocked" ? "Block User" : "Unblock User"}
          </Button>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageUsers;
