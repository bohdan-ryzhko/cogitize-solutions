"use client";
import { Post, PostsState } from "@/d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { addPost, startDrag, endDrag, movePost } = postsSlice.actions;
export default postsSlice.reducer;
