import React from "react";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <table className="table table-striped table-bordered table-sm table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Citizen Number</th>
          <th>Address ID</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            lastName={user.lastName}
            gender={user.gender}
            citizenNumber={user.citizenNumber}
            addressID={user.addressID.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
