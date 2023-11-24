import { AppState } from "@/redux";
import { selectCurrentBar, selectPosts } from "@/redux/selectors";
import { useSelector } from "react-redux";

export const useReduxState = (): AppState => ({
  posts: useSelector(selectPosts),
  currentBar: useSelector(selectCurrentBar),
});
