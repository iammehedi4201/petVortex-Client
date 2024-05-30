import { authKey } from "@/constant/common";
import { setToLocalStorage } from "@/utils/local_storage";

export const storeUserInfo = (accessToken: string) => {
  console.log("accessToken: ", accessToken);
  return setToLocalStorage(authKey, accessToken);
};
