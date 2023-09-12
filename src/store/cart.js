import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  isChanged: false,
};
/* Example:
  item: {
    id: 'p#',
    title: '',
    price: 0,
    quantity: 0
} */

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const addedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (addedItem) {
        addedItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += action.payload.price;
      state.totalQuantity++;
      state.isChanged = true;
    },
    deleteFromCart(state, action) {
      const deletedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (deletedItem) {
        if (deletedItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== deletedItem.id
          );
        } else {
          deletedItem.quantity--;
        }
        state.totalPrice = state.totalPrice - action.payload.price;
        state.totalQuantity--;
        state.isChanged = true;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items ?? [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
