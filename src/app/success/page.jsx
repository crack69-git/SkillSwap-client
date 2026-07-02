import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";
import { createPayment, patchTaskStatus } from "@/lib/actions/payments";
import { patchProposal } from "@/lib/actions/tasks";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["payment_intent"],
  });

  const { status, metadata, customer_details } = session;
  const customerEmail = customer_details?.email;
  console.log("metadata", metadata);

  if (status === "open") {
    return redirect("/");
  }
  console.log("Payment status:", customerEmail, status, metadata);
  if (status === "complete") {
    const paymentNow = {
      paymentIntentId: session.payment_intent.id,
      amount_received: session.payment_intent.amount_received / 100,
      currency: session.payment_intent.currency,
      status: session.payment_intent.status,
      clientEmail: customerEmail,
      clientId: metadata.clientId,
      freelancerMail: metadata.freelancerMail,
      taskId: metadata.taskId,
      taskTitle: metadata.taskTitle,
      proposalId: metadata.proposalId,
      paymentDate: new Date(),
      deadline: metadata.deadline,
    };

    const paymentResponse = await createPayment(paymentNow);

    if (paymentResponse.ok) {
      console.log("Payment created successfully:", paymentResponse);
      const res = await patchProposal(session.metadata.proposalId, {
        status: "accepted",
      });

      const taskRes = await patchTaskStatus(metadata.taskId, {
        status: "in-progress",
      });
    }

    return <section>Payment Successful!</section>;
  }
}
