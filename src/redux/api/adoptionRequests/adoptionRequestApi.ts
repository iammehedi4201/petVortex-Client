import { get } from "http";
import { baseApi } from "../baseApi";

const adoptionRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdoptionRequests: builder.query({
      query: () => {
        return {
          url: "/adoption-request",
          method: "GET",
        };
      },
    }),
    getAdoptionRequestBaseOnUser: builder.query({
      query: () => {
        return {
          url: `/adoption-request/user`,
          method: "GET",
        };
      },
    }),
    createAdoptionRequest: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/adoption-request",
          method: "POST",
          data,
        };
      },
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAdoptionRequestsQuery,
  useGetAdoptionRequestBaseOnUserQuery,
} = adoptionRequestApi;
