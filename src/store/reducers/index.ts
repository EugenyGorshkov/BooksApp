import { combineReducers } from '@reduxjs/toolkit'
import bookReducer from './bookReducer'
import searchReducer from './searchReducer'

export const rootReducer = combineReducers({
    bookReducer: bookReducer,
    searchReducer: searchReducer
})