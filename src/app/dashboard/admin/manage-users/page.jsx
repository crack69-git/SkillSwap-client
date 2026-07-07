import ManageUsers from "@/Components/Shared/admin/ManageUsers";
import { getAllUsers } from "@/lib/actions/admin";
import { getToken } from "@/lib/actions/tokenGet";
import { Button, Table } from "@heroui/react";
import React from "react";

const page = async () => {
  // const token = await getToken();
  const users = await getAllUsers();

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
                {users.map((user, index) => (
                  <ManageUsers key={index} user={user} />
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default page;
