import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={styles.list}>
      {props.users.map((user) => (
        <UserItem key={user.id} name={user.name} />
      ))}
    </ul>
  );
};

export default UsersList;
