// petSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

type Filter = { name: string; value: string };

interface PetState {
  filter: Filter[];
  searchTerm?: string;
}

const initialState: PetState = {
  filter: [],
  searchTerm: "",
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Filter>) => {
      state.filter.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filter = state.filter.filter(
        (filter) => filter.name !== action.payload
      );
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addFilter, removeFilter, setSearchTerm } = petSlice.actions;

export default petSlice.reducer;
