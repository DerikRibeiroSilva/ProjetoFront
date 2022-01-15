import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantidade++;
      } else {
        state.push({ ...action.payload, quantidade: 1 });
      }
    },
    incrementquantidade: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantidade++;
    },
    decrementquantidade: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantidade === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantidade--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementquantidade,
  decrementquantidade,
  removeFromCart,
} = cartSlice.actions;
