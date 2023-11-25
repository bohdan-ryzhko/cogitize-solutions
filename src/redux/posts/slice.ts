"use client";
import { Post, PostsState } from "@/d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UpdateCurrentName = {
  value: string,
  currentPost: number,
}

const initialState: PostsState = {
  postsList: [],
  currentPost: 0,
  draggedPostIndex: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.postsList.push(action.payload);
    },
    startDrag(state, action: PayloadAction<number>) {
      state.draggedPostIndex = action.payload;
    },
    endDrag(state) {
      state.draggedPostIndex = null;
    },
    movePost(state, action: PayloadAction<{ startIndex: number; endIndex: number }>) {
      const { startIndex, endIndex } = action.payload;
      const draggedPost = state.postsList[startIndex];
      state.postsList.splice(startIndex, 1);
      state.postsList.splice(endIndex, 0, draggedPost);
    },
    setCurrentPost(state, action: PayloadAction<number>) {
      state.currentPost = action.payload;
    },
    updateCurrentName(state, { payload }: PayloadAction<UpdateCurrentName>) {
      state.postsList[payload.currentPost].name = payload.value;
    }
  },
});

export const {
  addPost,
  startDrag,
  endDrag,
  movePost,
  setCurrentPost,
  updateCurrentName,
} = postsSlice.actions;

export default postsSlice.reducer;
