import EarningPage from "@/Components/Shared/freelancer/EarningPage";
import { getFreelancerPayments } from "@/lib/actions/payments";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const mail = session?.user?.email;
  const data = await getFreelancerPayments(mail);
  console.log("Fetched Payments:", data);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-2xl font-bold mb-5">My Earnings</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="">
            <Table.Header>
              <Table.Column isRowHeader>Payment ID</Table.Column>
              <Table.Column>Task ID</Table.Column>
              <Table.Column>Currency</Table.Column>

              <Table.Column>Earning</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>
            <Table.Body>
              {data.payments.map((payment) => (
                <EarningPage key={payment._id} payment={payment} />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
