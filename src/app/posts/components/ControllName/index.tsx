"use client";
import sass from "./ControllName.module.scss";
import { useReduxState } from "@/hooks";
import { AppDispatch } from "@/redux";
import { updateCurrentName } from "@/redux/posts/slice";
import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";

export const ControllName: FC = () => {
  const { posts: { postsList, currentPost } } = useReduxState();
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCurrentName({
      value: target.value,
      currentPost: currentPost,
    }));
  }

  return (
    <div className={sass.currentNameWrapper}>
      <label
        className={sass.label}
        htmlFor="currentName">
        Название
      </label>
      <input
        className={sass.input}
        id={"currentName"}
        name={"currentName"}
        type="text"
        onChange={handleChangeName}
        value={postsList[currentPost].name}
      />
    </div>
  )
}
