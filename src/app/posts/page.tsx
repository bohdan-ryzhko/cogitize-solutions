"use client"
import sass from "./page.module.scss";
import { AddNewPositionButton, AddNewPositionModal, CategoryInfo, PositionList } from "./components";
import { useState } from "react";

export default function Posts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={sass.postsBody}>
      <div className={sass.categoryWrapper}>
        <PositionList />
        <AddNewPositionButton
          click={() => setIsOpen(prev => !prev)}
          isOpen={isOpen}
        />
        <AddNewPositionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <CategoryInfo />
    </section>
  )
}
