import { jwtDecode } from "jwt-decode";

export const decodeToken = (token: string) => {
  if (!token) {
    return;
  }

  return jwtDecode(token);
};
