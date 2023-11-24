import sass from "./Content.module.scss";
import { FC, PropsWithChildren } from "react";

export const Content: FC<PropsWithChildren> = ({ children }) => (
  <div className={sass.content}>{children}</div>
);
