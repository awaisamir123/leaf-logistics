// / eslint-disable / 
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";  // eslint-disable-line no-use-before-define
// import { ThunkMiddleware } from 'redux-thunk';
import { useDispatch } from 'react-redux'
// import logger from 'redux-logger'
// import  thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// const middlewares:any = [];  

const store = configureStore({
  reducer: rootReducer
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch()
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store