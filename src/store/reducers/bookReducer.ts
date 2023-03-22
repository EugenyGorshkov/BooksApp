import { createSlice } from "@reduxjs/toolkit";
import { BookItemApi } from "../../components/BooksComponent";

interface BooksState {
  books: [] | BookItemApi[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksAdd(state, action) {
      state.books = [...state.books, ...action.payload]
    },
    newBooksQuerry(state, action) {
      resetState()
      state.books = [...action.payload];
    },
    resetState() {
      return initialState
    }
  },
});

export const {
  booksAdd,
  newBooksQuerry,
  resetState,
} = booksSlice.actions;
export default booksSlice.reducer;
