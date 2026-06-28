import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";
import { createPayment } from "@/lib/actions/payments";
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
      clientId: metadata.clientId,
      freelancerMail: metadata.freelancerMail,
      taskId: metadata.taskId,
      proposalId: metadata.proposalId,
    };

    const paymentResponse = await createPayment(paymentNow);

    if (paymentResponse.ok) {
      console.log("Payment created successfully:", paymentResponse);
      const res = await patchProposal(session.metadata.proposalId, {
        status: "accepted",
      });
    }

    return <section>Payment Successful!</section>;
  }
}
