import { AppState } from "..";

export const selectPosts = (state: AppState) => state.posts;
export const selectCurrentBar = (state: AppState) => state.currentBar;
