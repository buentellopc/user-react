import React, { lazy, Suspense } from "react";

const LazyMainNavigation = lazy(() => import("./UserNav"));

const MainNavigation = (props) => (
  <Suspense fallback={null}>
    <LazyMainNavigation {...props} />
  </Suspense>
);

export default MainNavigation;
