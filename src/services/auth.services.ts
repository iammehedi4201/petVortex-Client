import { authKey } from "@/constant/common";
import { decodeToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFormLocalStorage,
  setToLocalStorage,
} from "@/utils/local_storage";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodeToken(authToken);
    return {
      id: decodedData?.id,
      email: decodedData?.email,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFormLocalStorage(authKey);
};
