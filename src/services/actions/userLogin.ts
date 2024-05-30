"use server";

export const loginUser = async (userInfo: TLoginUser) => {
  console.log("userInfo: ", userInfo);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
    cache: "no-store",
  });

  return await response.json();
};
