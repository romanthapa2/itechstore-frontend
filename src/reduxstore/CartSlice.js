import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === newItem._id
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += newItem.quantity;
        state.cart[existingItemIndex].totalPrice =
          state.cart[existingItemIndex].price *
          state.cart[existingItemIndex].quantity;
      } else {
        newItem.totalPrice = newItem.price;
        state.cart.push(newItem);
      }
    },
    deleteCart: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],
      };
    },
  },
});

export const cart = (state) => state.cartslice.cart;
export const { addToCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;
