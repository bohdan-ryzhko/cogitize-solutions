"use client";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./index";
import { PersistGate } from "redux-persist/integration/react";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
