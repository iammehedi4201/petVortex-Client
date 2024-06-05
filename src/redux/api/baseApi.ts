// Need to use the React-specific entry point to import createApi
import axiosBaseQuery from "@/helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pet-vortex-server.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["pets", "user", "adoptionRequests"],
});
