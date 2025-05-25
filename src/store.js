import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice' // import default reducer

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
