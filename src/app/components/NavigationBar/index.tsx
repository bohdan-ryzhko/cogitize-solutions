"use client";
import sass from "./NavigationBar.module.scss";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, setCurrentBar } from "@/redux";
import { useReduxState } from "@/hooks";

const navigationList = [
  { text: "Иерархия", id: 0 },
  { text: "Должности", id: 1 },
  { text: "Список персонала", id: 2 },
  { text: "Наборы экипировки", id: 3 },
];

export const NavigationBar: FC = () => {
  const { currentBar } = useReduxState();
  const dispatch = useDispatch<AppDispatch>();

  const selectBar = (itemIndex: number) => {
    dispatch(setCurrentBar(itemIndex));
  }

  return (
    <nav className={sass.navBar}>
      <ul className={sass.navList}>
        {
          navigationList.map(({ text, id }, itemIndex) => (
            <li key={id} className={currentBar.bar === id ? sass.navItemActive : sass.navItem}>
              <button
                type="button"
                className={currentBar.bar === id ? sass.navButtonActive : sass.navButton}
                onClick={() => selectBar(itemIndex)}
              >{text}
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};
