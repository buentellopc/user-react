import React, { useEffect, useState } from "react";
import UsersList from "../../user/UsersList/UsersList";
import UserService from "../../../service/UserService";

const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => response.json())
      .then((data) => {
        console.log("users after retrieving data", data);

        setIsLoading(false);
        setLoadedUsers(data);
      });
  }, []);

  // console.log(loadedUsers);

  if (isLoading) {
    return (
      <section>
        <p>Loading users</p>
      </section>
    );
  }

  return (
    <section>
      <UsersList users={loadedUsers} />
    </section>
  );
};

export default AllUsers;
