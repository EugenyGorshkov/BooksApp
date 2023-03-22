import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  search: string;
  catehory: string;
  sortedType: string;
}

const initialState: SearchState = {
  search: "{search terms}",
  sortedType: "relevance",
  catehory: "all",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchQuerry(state, action) {
      state.search = action.payload;
    },
    changeCategoryQuerry(state, action) {
      state.catehory = action.payload;
    },
    changeSortedQuerry(state, action) {
      state.sortedType = action.payload;
    },
  },
});

export const {
    changeSearchQuerry,
    changeSortedQuerry,
    changeCategoryQuerry,
  } = searchSlice.actions;
  export default searchSlice.reducer;
  