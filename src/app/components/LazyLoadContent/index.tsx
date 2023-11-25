"use client"
import sass from "./LazyLoadContent.module.scss";
import { FC, Suspense, lazy } from "react";
import { useReduxState } from "@/hooks";

const HierarchyLazy = lazy(() => import("../../hierarchy/page"));
const PostsLazy = lazy(() => import('../../posts/page'));
const EmployeesLazy = lazy(() => import('../../employees/page'));
const KitsLazy = lazy(() => import('../../kits/page'));

const lazyComponents = [
  HierarchyLazy,
  PostsLazy,
  EmployeesLazy,
  KitsLazy,
];

export const LazyLoadContent: FC = () => {
  const { currentBar } = useReduxState();
  const LazyComponent = lazyComponents[currentBar.bar];

  return (
    <div className={sass.lazyWrapper}>
      <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
};
