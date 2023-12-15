import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "model",
  initialState: {
    show: false,
  },
  reducers: {
    openModel: (state, action) => {
      state.show = action.payload;
    },
    closeModel: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { openModel, closeModel } = cartSlice.actions;
export default cartSlice.reducer;
