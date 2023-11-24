"use client";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "./index";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);
