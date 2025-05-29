import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice' 
import  breadcumbs  from './slices/breadcumbs'

export default configureStore({
  reducer: {
    counter: counterReducer,
    bread:breadcumbs,
  },
})
