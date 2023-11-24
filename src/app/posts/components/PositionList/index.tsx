"use client";
import { FC } from "react";
import { useReduxState } from "@/hooks";

export const PositionList: FC = () => {
  const { posts } = useReduxState();
  return (
    <ul>
      {
        posts.postsList.map((post) => (
          <li key={post.amountTasks}></li>
        ))
      }
    </ul>
  )
}
