import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },

    reducers:{
        addToCart:(state,action)=>{
            const itemPresent=state.cart.find((item)=>item.id===action.payload.id);
            if(itemPresent){
                itemPresent.quantity++
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
    }
})

export const {addToCart} = CartSlice.actions
export default CartSlice.reducer