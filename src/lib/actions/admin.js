"use server";
export const getAllUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const users = await res.json();
  return users;
};

export const patchUser = async (userId, userData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );
  const updatedUser = await res.json();
  return updatedUser;
};

export const patchTask = async (taskId, taskData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${taskId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    },
  );
  const updatedTask = await res.json();
  return updatedTask;
};

export const deleteTask = async (taskId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${taskId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const result = await res.json();
  return result;
};
