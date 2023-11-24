"use client";
import sass from "./AddNewPositionButton.module.scss";
import { FC } from "react";

type AddNewPositionButtonProps = {
  click: () => void,
  isOpen: boolean,
}

export const AddNewPositionButton: FC<AddNewPositionButtonProps> = ({ click, isOpen }) => {
  return (
    <button
      type="button"
      className={sass.addNewPosition}
      onClick={click}
    >
      {
        isOpen
          ? "Скрыть модальное окно"
          : "Добавить новую должность"
      }
    </button>
  )
};
