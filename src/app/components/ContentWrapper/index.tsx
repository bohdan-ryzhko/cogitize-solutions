import sass from "./ContentWrapper.module.scss";
import { FC, PropsWithChildren } from "react";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={sass.content}>{children}</div>
);
