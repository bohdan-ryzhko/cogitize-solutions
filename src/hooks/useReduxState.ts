import { AppState } from "@/redux";
import { selectPosts } from "@/redux/selectors";
import { useSelector } from "react-redux";

export const useReduxState = (): AppState => ({
  posts: useSelector(selectPosts),
});
