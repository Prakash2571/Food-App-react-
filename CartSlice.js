import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    emptyCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
