const GET_URL = "http://localhost:9095";

const createUser = (requestOptions) =>
  fetch("http://localhost:9092/v1/publish/user", requestOptions);

const getAllUsers = () => {
  return fetch(`${GET_URL}/users`);
};

const getUser = (userId) => {
  return fetch(`${GET_URL}/user/${userId}`);
};

const UserService = {
  createUser,
  getAllUsers,
  getUser,
};

export default UserService;
