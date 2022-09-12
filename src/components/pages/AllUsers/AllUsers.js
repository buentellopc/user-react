import React, { useEffect, useState } from "react";
import UsersTable from "../../user/UsersTable/UsersTable";
import UserService from "../../../service/UserService";
import UserSearch from "../../user/UserSearch/UserSearch";
import styles from "./AllUsers.module.css";

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
    <section className={styles.AllUsers}>
      <div className="row">
        <div className="col">
          <UsersTable users={loadedUsers} />
        </div>
        <div className="col">
          <UserSearch />
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
