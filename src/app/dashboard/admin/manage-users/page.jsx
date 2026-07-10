import ManageUsers from "@/Components/Shared/admin/ManageUsers";
import { getAllUsers } from "@/lib/actions/admin";
import { getToken } from "@/lib/actions/tokenGet";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user?.role !== "admin") {
    redirect("/unauthorize");
  }

  // 1. Safely retrieve the token and users list
  let token = null;
  let fetchedUsers = [];

  try {
    token = await getToken();
    fetchedUsers = await getAllUsers(token);
  } catch (error) {
    console.error("Failed to fetch users backend data:", error);
  }

  // 2. Guarantee it's a valid array so it won't crash Vercel execution
  const safeUsers = Array.isArray(fetchedUsers) ? fetchedUsers : [];

  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-3xl font-bold">Manage Users</h2>
      <div className="mt-5">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>
                {safeUsers.length > 0 ? (
                  safeUsers.map((user, index) => (
                    <ManageUsers key={user?._id || index} user={user} />
                  ))
                ) : (
                  // Safe fallback if there are zero users or connection is broken
                  <Table.Row>
                    <Table.Cell>No users found</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default page;
