import sass from "./Container.module.scss";
import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={sass.container}>{children}</div>
);
