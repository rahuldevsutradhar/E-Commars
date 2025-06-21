import { createSlice } from '@reduxjs/toolkit'

export const addtocart = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [],
    },
    reducers: {
        addcart: (state, action) => {


            const allData = state.cartItem.find(item => item.title === action.payload.title)

            if (allData) {
                allData.quantity += 1
            } else {
                state.cartItem.push({ ...action.payload, quantity: 1 })
            }



        },
    },
})

export const { addcart } = addtocart.actions
export default addtocart.reducer
