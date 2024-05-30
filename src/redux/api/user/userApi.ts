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
    }),
  }),
});

export const { useGetMyProfileQuery } = userApi;
