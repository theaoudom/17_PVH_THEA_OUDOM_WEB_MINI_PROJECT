import { baseUrl } from "@/utils/constants";

export const authService = async (userInfo) => {
  console.log("user info in authService ", userInfo);
  const res = await fetch(
    `${baseUrl}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );
  const authData = await res.json();
  console.log("authData token", authData);
  return authData;
};

export const registerService = async (userData) => { 
  const res = await fetch(`${baseUrl}/auth/sign-up`,{
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = res.json();
  return data; 
}
