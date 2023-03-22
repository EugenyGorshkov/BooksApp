import { combineReducers } from '@reduxjs/toolkit'
import bookReducer from './bookReducer'

export const rootReducer = combineReducers({
    bookReducer: bookReducer
})