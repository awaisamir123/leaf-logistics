import { combineReducers } from '@reduxjs/toolkit'
import newsReducer from './news/newsSlice'

const rootReducer = combineReducers({
    newsReducer: newsReducer,
})

export default rootReducer