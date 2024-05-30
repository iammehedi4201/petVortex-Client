import { authKey } from "@/constant/common";
import { getFromLocalStorage } from "@/utils/local_storage";
import axios, { AxiosError } from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["accept"] = "application/json";
instance.defaults.timeout = 5000;

// request interceptors
instance.interceptors.request.use((config) => {
  const accessToken = getFromLocalStorage(authKey);
  console.log("accessToken", accessToken);

  if (accessToken) {
    config.headers.authorization = accessToken;
  }
  return config;
}),
  (error: AxiosError) => {
    return Promise.reject(error);
  };

//   response interceptors
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { instance };
