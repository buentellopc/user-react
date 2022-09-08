import React, { lazy, Suspense } from 'react';

const LazyAllUsers = lazy(() => import('./AllUsers'));

const AllUsers = props => (
  <Suspense fallback={null}>
    <LazyAllUsers {...props} />
  </Suspense>
);

export default AllUsers;
