import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => {
        return {
          url: "/profile",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateMyProfile: builder.mutation({
      query: (data) => {
        console.log("Body", data);
        return {
          url: "/profile",
          method: "PUT",
          data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = userApi;
