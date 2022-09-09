import React from "react";
import styles from "./UserForm.module.css";
import { useRef } from "react";

const UserForm = (props) => {
  // Create references objects to manipulate DOM elements
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const genderInputRef = useRef();
  const citizenIdInputRef = useRef();
  const birthDateInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const zipCodeInputRef = useRef();
  const addressTypeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // Access the content of the DOM elements
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredCitizenNumber = citizenIdInputRef.current.value;
    const enteredBirthDate = birthDateInputRef.current.value;
    const enteredStreetInput = streetInputRef.current.value;
    const enteredCityInput = cityInputRef.current.value;
    const enteredCountryInput = countryInputRef.current.value;
    const enteredZipCodeInput = zipCodeInputRef.current.value;
    const enteredAddressTypeInput = addressTypeInputRef.current.value;

    const userData = {
      name: enteredName,
      lastName: enteredLastName,
      addressID: {
        street: enteredStreetInput,
        city: enteredCityInput,
        country: enteredCountryInput,
        zipCode: enteredZipCodeInput,
        addressType: enteredAddressTypeInput,
      },
      gender: enteredGender,
      citizenNumber: enteredCitizenNumber,
      status: true,
      birthDate: enteredBirthDate,
    };

    console.log(userData);
    props.onAddUser(userData);
  }

  return (
    <div className={styles.UserForm}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            required
            id="lastName"
            ref={lastNameInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="birthDate">Date of birth</label>
          <input
            type="date"
            required
            id="birthDate"
            ref={birthDateInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="gender">Gender</label>
          <input required id="gender" ref={genderInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="citizenNumber">Citizen ID</label>
          <input
            type="text"
            required
            id="citizenNumber"
            ref={citizenIdInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="street">Street</label>
          <input type="text" required id="street" ref={streetInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="city">City</label>
          <input type="text" required id="city" ref={cityInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            required
            id="country"
            ref={countryInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="zipCode">Zipcode</label>
          <input
            type="number"
            required
            id="zipCode"
            ref={zipCodeInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="addressType">Address type</label>
          <input
            type="text"
            required
            id="addressType"
            ref={addressTypeInputRef}
          ></input>
        </div>

        <div className={styles.actions}>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
