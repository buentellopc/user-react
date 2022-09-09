const getAllUsers = () => {
  // const users = [];

  return fetch("http://localhost:9095/users");
};

const UserService = {
  getAllUsers,
};

export default UserService;
