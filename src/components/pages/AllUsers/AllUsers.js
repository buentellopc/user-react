import React, { useEffect, useState } from "react";
import UsersTable from "../../user/UsersTable/UsersTable";
import UserService from "../../../service/UserService";
import UserSearch from "../../user/UserSearch/UserSearch";
import styles from "./AllUsers.module.css";
import MainNavigation from "../../layout/MainNavigation/MainNavigation";

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
    <div className="row">
      <div className="col">
        <h3>Users table</h3>
        <UsersTable users={loadedUsers} />
      </div>
      <div className="col">
        <h3>Find user by id</h3>
        <UserSearch />
      </div>
    </div>
  );
};

export default AllUsers;
