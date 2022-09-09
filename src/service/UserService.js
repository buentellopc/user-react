const getAllUsers = () => {
  return fetch("http://localhost:9095/users");
};

const createUser = (requestOptions) =>
  fetch("http://localhost:9092/v1/publish/user", requestOptions);

const UserService = {
  getAllUsers,
  createUser,
};

export default UserService;
