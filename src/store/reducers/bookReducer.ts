import { createSlice } from "@reduxjs/toolkit";
import { BookItemApi } from "../../components/BooksComponent";

interface BooksState {
  search: string;
  catehory: string;
  sortedType: string;
  books: [] | BookItemApi[];
}

const initialState: BooksState = {
  search: "search terms",
  sortedType: "relevance",
  catehory: "all",
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksAdd(state, action) {
      state.books.push(...action.payload);
      console.log("action.payload:", action.payload);
    },
    newBooksQuerry(state, action) {
      state.books = [...action.payload];
    },
    changeSearchQuerry(state, action) {
      state.search = action.payload;
    },
    changeCatehoryQuerry(state, action) {
      state.catehory = action.payload;
    },
    changeSortedQuerry(state, action) {
      state.sortedType = action.payload;
    },
  },
});

export const {
  booksAdd,
  changeSearchQuerry,
  changeSortedQuerry,
  newBooksQuerry,
} = booksSlice.actions;
export default booksSlice.reducer;
