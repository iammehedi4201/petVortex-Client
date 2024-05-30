"use server";

export const registerUser = async (userInfo: TRegisterUser) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      cache: "no-store",
    }
  );

  return await response.json();
};
