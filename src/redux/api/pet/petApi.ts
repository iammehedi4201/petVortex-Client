import { baseApi } from "../baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPets: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query) {
          query.forEach((item: { name: string; value: any }) => {
            params.append(item.name, item.value as any);
          });
        }
        return {
          url: `/pets`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: any) => {
        return {
          data: response?.data,
          meta: response?.meta,
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
  overrideExisting: true,
});

export const { useGetAllPetsQuery, useGetPetByIdQuery } = petApi;
