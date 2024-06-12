import { createReducer, createSlice } from "@reduxjs/toolkit";


const initialState={
    cart: [],
}


export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item._id === newItem._id);
            if(existingItemIndex !== -1){
              state.cart[existingItemIndex].quantity += newItem.quantity;
              state.cart[existingItemIndex].totalPrice = state.cart[existingItemIndex].price * state.cart[existingItemIndex].quantity;
            }else {
              // If the item doesn't exist in the cart, add it with quantity 1 and calculate total price
              newItem.quantity = newItem.quantity;
              newItem.totalPrice = newItem.price*newItem.quantity;
              state.cart.push(newItem);
            }
          },
          resetCart: (state, action) => {
            return { ...state, cart: [] };
          },
          deleteCart: (state, action) => {
            const index = action.payload;
            return { ...state, cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)] };
          },
    }
})

export const cart = (state) => state.cartslice.cart;
export const {addToCart,resetCart,deleteCart} = CartSlice.actions;
export default CartSlice.reducer;