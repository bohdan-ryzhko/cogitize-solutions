"use client";
import { currentBarState } from "@/d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: currentBarState = {
  bar: 1,
}

const currentBarSlice = createSlice({
  name: "current-bar",
  initialState,
  reducers: {
    setCurrentBar(state, action: PayloadAction<number>) {
      state.bar = action.payload;
    }
  },
});

export const { setCurrentBar } = currentBarSlice.actions;
export default currentBarSlice.reducer;
