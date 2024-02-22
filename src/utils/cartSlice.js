import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, RemoveItem } = cartSlice.actions;
