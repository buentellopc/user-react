import React from "react";
// import styles from "./UsersTable.module.css";

const UsersList = (props) => {
  const userRows = props.users.map((user) => (
    <tr key={user.id}>
      <td>
        <p>{user.id}</p>
      </td>
      <td>
        <p>{user.name}</p>
      </td>
      <td>
        <p>{user.lastName}</p>
      </td>
      <td>
        <p>{user.gender}</p>
      </td>
      <td>
        <p>{user.citizenNumber}</p>
      </td>
      <td>
        <p>{user.addressID.id}</p>
      </td>
    </tr>
  ));

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
      <tbody>{userRows}</tbody>
    </table>
  );
};

export default UsersList;
