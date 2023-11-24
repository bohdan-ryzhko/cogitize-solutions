"use client";
import sass from "./PositionList.module.scss";
import { FC, useRef } from "react";
import { MdDragIndicator } from "react-icons/md";
import { useReduxState } from "@/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { endDrag, movePost, startDrag } from "@/redux/posts/slice";

export const PositionList: FC = () => {
  const { posts } = useReduxState();
  const dispatch = useDispatch<AppDispatch>();
  const dragItem = useRef<HTMLLIElement | null>(null);

  const handleDragStart = (index: number, event: React.DragEvent<HTMLLIElement>) => {
    const { currentTarget } = event;
    currentTarget.classList.add(sass.dragging);
    dispatch(startDrag(index));
    dragItem.current = currentTarget;
  };

  const handleDragOver = (index: number, event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    if (dragItem.current && posts.draggedPostIndex !== null) {
      const dragOverItem = currentTarget;
      const bounding = dragOverItem.getBoundingClientRect();
      const offset = bounding.y + bounding.height / 2;

      if (offset > event.clientY) {
        dragOverItem.classList.add(sass.hovered);
      } else {
        dragOverItem.classList.remove(sass.hovered);
      }
    }
  };

  const handleDragLeave = (index: number, event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    if (dragItem.current && posts.draggedPostIndex !== null) {
      currentTarget.classList.remove(sass.hovered);
    }
  };

  const handleDrop = (index: number, event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    if (dragItem.current && posts.draggedPostIndex !== null) {
      currentTarget.classList.remove(sass.hovered);
      const startIndex = posts.draggedPostIndex;
      const endIndex = index;
      dispatch(movePost({ startIndex, endIndex }));
    }
  };

  const handleDragEnd = () => {
    dispatch(endDrag());

    if (dragItem.current) {
      dragItem.current.classList.remove(sass.dragging);
    }
    dragItem.current = null;
  };

  return (
    <ul className={sass.list}>
      {
        posts.postsList.map((post, index) => (
          <li
            id={`post-${index}`}
            key={post.amountTasks}
            draggable
            onDragStart={(event) => handleDragStart(index, event)}
            onDragEnd={handleDragEnd}
            onDragOver={(event) => handleDragOver(index, event)}
            onDragLeave={(event) => handleDragLeave(index, event)}
            onDrop={(event) => handleDrop(index, event)}
            className={sass.post}
          >
            <button type="button" className={sass.dragAndDropBtn}>
              <MdDragIndicator size={20} color="#F5F5F528" />
            </button>
            <div className={sass.text}>
              <p className={sass.name}>{post.name}</p>
              <p className={sass.amountTasks}>{post.amountTasks} заданий</p>
            </div>
            <p className={sass.priceWrapper}>
              <span className={sass.price}>${post.price}</span>
              <span className={sass.priceDecorative}>/</span>
              <span className={sass.priceDecorative}>час</span>
            </p>
          </li>
        ))
      }
    </ul>
  )
}
