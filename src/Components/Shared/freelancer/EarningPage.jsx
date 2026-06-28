import { Table } from "@heroui/react";
import React from "react";

const EarningPage = ({ payment }) => {
  return (
    <Table.Row>
      <Table.Cell>{payment._id}</Table.Cell>
      <Table.Cell>{payment.taskId}</Table.Cell>
      <Table.Cell>{payment.currency}</Table.Cell>

      <Table.Cell>{payment.amount_received}</Table.Cell>
      <Table.Cell>
        {payment.status === "succeeded" ? "Paid" : "Pending"}
      </Table.Cell>
    </Table.Row>
  );
};

export default EarningPage;
