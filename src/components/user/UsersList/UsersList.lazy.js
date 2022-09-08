import React, { lazy, Suspense } from 'react';

const LazyUsersList = lazy(() => import('./UsersList'));

const UsersList = props => (
  <Suspense fallback={null}>
    <LazyUsersList {...props} />
  </Suspense>
);

export default UsersList;
