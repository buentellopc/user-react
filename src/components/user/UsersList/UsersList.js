import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            lastName={user.lastName}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
