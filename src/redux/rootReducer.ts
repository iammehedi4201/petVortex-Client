import { baseApi } from "./api/baseApi";
import petReducer from "@/redux/api/pet/petSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  pet: petReducer,
};
