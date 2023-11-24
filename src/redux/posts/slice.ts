"use client";
import { Post, PostsState } from "@/d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PostsState = {
  postsList: [],
  currentPost: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.postsList.push(action.payload);
    }
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
