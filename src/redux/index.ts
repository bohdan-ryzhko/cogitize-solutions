"use client";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postsReducer, { addPost } from "./posts/slice";
import currentBarReducer, { setCurrentBar } from "./currentBar/slice";

import { Providers } from "./Provider";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const postsPersistConfig = {
  key: "posts",
  storage,
  whitelist: ["postsList", "currentPost"],
};

const reducer = combineReducers({
  posts: persistReducer(postsPersistConfig, postsReducer),
  currentBar: currentBarReducer,
});

const store = configureStore({
  reducer,
  middleware,
});

const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export {
  store,
  Providers,
  addPost,
  setCurrentBar,
  persistor,
};
