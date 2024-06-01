import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/change-password",
          method: "POST",
          data,
        };
      },
    }),
  }),
});

export const { useChangePasswordMutation } = authApi;
