import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice' 
import  breadcumbs  from './slices/breadcumbs'
import  addtocart  from './slices/addtocart'

export default configureStore({
  reducer: {
    counter: counterReducer,
    bread:breadcumbs,
    cart: addtocart,
  },
})
