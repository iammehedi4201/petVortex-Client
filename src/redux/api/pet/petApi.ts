import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: () => {
        return {
          url: "/pets",
          method: "GET",
        };
      },
    }),
    getPetById: builder.query({
      query: (id: string) => {
        return {
          url: `/pets/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllPetsQuery, useGetPetByIdQuery } = petApi;
