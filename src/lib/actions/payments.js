"use server";

export const createPayment = async (paymentData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });
  return res.json();
};
