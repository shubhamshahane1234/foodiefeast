import { createSlice } from "@reduxjs/toolkit";
const dishData = createSlice({
  name: "dish",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});
export default dishData.reducer;
export const { setData } = dishData.actions;
