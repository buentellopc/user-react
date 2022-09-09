import React, { lazy, Suspense } from 'react';

const LazyMainNavigation = lazy(() => import('./MainNavigation'));

const MainNavigation = props => (
  <Suspense fallback={null}>
    <LazyMainNavigation {...props} />
  </Suspense>
);

export default MainNavigation;
