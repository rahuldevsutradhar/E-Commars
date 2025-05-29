import { createSlice } from '@reduxjs/toolkit'

export const breadcumbs = createSlice({
  name: 'bread',
  initialState: {
      aftervalue:null,
      prevValue: null, 
      currentValue: null,
      
  },
  reducers: {
    activebutton: (state,action) => {
      // console.log(state.prevValue);
      // console.log(action.payload);

      state.aftervalue=state.prevValue
      state.prevValue=state.currentValue
      state.currentValue=action.payload
     
    },
  },
})

export const { activebutton } = breadcumbs.actions
export default breadcumbs.reducer
