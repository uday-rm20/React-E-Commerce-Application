
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

/* search slice used to filter out the searched products through search bar */

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
