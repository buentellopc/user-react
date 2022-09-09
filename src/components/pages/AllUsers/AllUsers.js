import React from "react";
import UsersList from "../../user/UsersList/UsersList";

const USERS_DATA = [
  {
    id: 104,
    name: "Luis",
    lastName: "Alan",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T15:33:51.000+00:00",
    status: true,
    citizenNumber: "hola123",
    gender: "Male",
    addressID: {
      id: 6,
      street: "Ricardo Margain",
      city: "San Pedro",
      country: "Mexico",
      zipCode: 10000,
      address_type: "Business",
    },
  },
  {
    id: 105,
    name: "check with ",
    lastName: "new properties",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T16:15:36.000+00:00",
    status: true,
    citizenNumber: "props",
    gender: "Male",
    addressID: {
      id: 7,
      street: "Ricardo Margain",
      city: "San Pedro",
      country: "Mexico",
      zipCode: 10000,
      address_type: "Business",
    },
  },
  {
    id: 147,
    name: "another ",
    lastName: "user",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T16:33:14.000+00:00",
    status: true,
    citizenNumber: "props565",
    gender: "Male",
    addressID: {
      id: 49,
      street: "Ray Bradbury",
      city: "Monterrey",
      country: "Mexico",
      zipCode: 890680,
      address_type: "private",
    },
  },
  {
    id: 148,
    name: "another ",
    lastName: "user",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T17:07:04.000+00:00",
    status: true,
    citizenNumber: "prop90",
    gender: "Male",
    addressID: {
      id: 50,
      street: "Ray Bradbury",
      city: "Monterrey",
      country: "Mexico",
      zipCode: 890680,
      address_type: "private",
    },
  },
  {
    id: 149,
    name: "another ",
    lastName: "user",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T17:12:39.000+00:00",
    status: true,
    citizenNumber: "procxp90",
    gender: "Male",
    addressID: {
      id: 51,
      street: "Ray Bradbury",
      city: "Monterrey",
      country: "Mexico",
      zipCode: 890680,
      address_type: "private",
    },
  },
  {
    id: 172,
    name: "foo user",
    lastName: "bar user",
    birthDate: "1997-12-18T06:00:00.000+00:00",
    registrationDate: "2022-08-26T17:19:32.000+00:00",
    status: true,
    citizenNumber: "foo1",
    gender: "Male",
    addressID: {
      id: 74,
      street: "Julio Cortazar",
      city: "Monterrey",
      country: "Mexico",
      zipCode: 10001,
      address_type: "private",
    },
  },
  {
    id: 173,
    name: "Peter",
    lastName: "Parker",
    birthDate: "2022-03-02T06:00:00.000+00:00",
    registrationDate: "2022-08-26T17:28:19.000+00:00",
    status: false,
    citizenNumber: "128891829",
    gender: "male",
    addressID: {
      id: 75,
      street: "Paseo del Sol",
      city: "San Pedro",
      country: "Mexico",
      zipCode: 0,
      address_type: "Business",
    },
  },
];

const AllUsers = () => (
  <section>
    <UsersList users={USERS_DATA} />
  </section>
);

export default AllUsers;
