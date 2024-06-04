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
      providesTags: ["adoptionRequests"],
    }),
    getAdoptionRequestBaseOnUser: builder.query({
      query: () => {
        return {
          url: `/adoption-request/user`,
          method: "GET",
        };
      },
      providesTags: ["adoptionRequests"],
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
      invalidatesTags: ["adoptionRequests"],
    }),
    updateAdoptionRequestStatus: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: `/adoption-request/${data?.id}`,
          method: "PUT",
          contentType: "application/json",
          data: data?.updateInfo,
        };
      },
      invalidatesTags: ["adoptionRequests"],
    }),
  }),
});

export const {
  useCreateAdoptionRequestMutation,
  useGetAdoptionRequestsQuery,
  useGetAdoptionRequestBaseOnUserQuery,
  useUpdateAdoptionRequestStatusMutation,
} = adoptionRequestApi;
