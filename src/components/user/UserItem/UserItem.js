import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const {
    id,
    name,
    lastName,
    gender,
    citizenNumber,
    status,
    birthDate,
    addressID,
  } = props.userDetails;
  // console.log(typeof birthDate);
  // console.log(birthDate.slice(0, 10));

  return (
    <div className={styles.UserItem}>
      <div className="card border border-2 mb-3 shadow-sm">
        <div class="card-header">User Details</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">User ID: {id}</li>
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Last Name: {lastName}</li>
            <li className="list-group-item">Gender: {gender}</li>
            <li className="list-group-item">Citizen Number: {citizenNumber}</li>
            <li className="list-group-item">Status: {status.toString()}</li>
            <li className="list-group-item">
              Date of birth: {birthDate.slice(0, 10)}
            </li>
            <li className="list-group-item">Address ID: {addressID.id}</li>
            <li className="list-group-item">Street: {addressID.street}</li>
            <li className="list-group-item">City: {addressID.city}</li>
            <li className="list-group-item">Country: {addressID.country}</li>
            <li className="list-group-item">Zipcode: {addressID.zipCode}</li>
            <li className="list-group-item">
              Address type: {addressID.address_type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
