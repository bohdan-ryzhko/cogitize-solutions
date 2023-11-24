"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer, { addPost } from "./posts/slice";
import { Providers } from "./Provider";

const reducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({
  reducer,
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export {
  store,
  Providers,
  addPost,
};
