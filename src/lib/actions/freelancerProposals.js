"use server";
export const getOpenTasks = async (name = "", skill = "", page = 1) => {
  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (skill) params.append("skill", skill);
  params.append("page", page.toString());
  params.append("limit", "9"); // Fixed at 9 items per page

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/open?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  return res.json(); // Returns { tasks: [...], totalItems: X }
};
export const getSingleTask = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/open/${id}`, {
    method: "GET",
  });
  return res.json();
};

export const submitProposal = async (proposalData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/proposals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proposalData),
  });
  return res.json();
};

export const getFreelancerProposals = async (freelancerId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proposals/${freelancerId}`,
    {
      method: "GET",
    },
  );
  return res.json();
};

export const getProposals = async (mail) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getprop/${encodeURIComponent(mail)}`,
    {
      method: "GET",
    },
  );
  return res.json();
};

export const freelancerPatch = async (freelancerId, updatedData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/${freelancerId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    },
  );
  return res.json();
};

export const getFreelancerProfile = async (freelancerId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/freelancer/${freelancerId}`,
    {
      method: "GET",
    },
  );
  return res.json();
};

export const getSumOfPayments = async (freelancerEmail) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/payments/total/${encodeURIComponent(freelancerEmail)}`,
    {
      method: "GET",
    },
  );
  return res.json();
};
