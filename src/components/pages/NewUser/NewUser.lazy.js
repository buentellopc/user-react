import React, { lazy, Suspense } from 'react';

const LazyNewUser = lazy(() => import('./NewUser'));

const NewUser = props => (
  <Suspense fallback={null}>
    <LazyNewUser {...props} />
  </Suspense>
);

export default NewUser;
