import React, { lazy, Suspense } from "react";

const LazyUsersList = lazy(() => import("./UsersTable"));

const UsersList = (props) => (
  <Suspense fallback={null}>
    <LazyUsersList {...props} />
  </Suspense>
);

export default UsersList;
