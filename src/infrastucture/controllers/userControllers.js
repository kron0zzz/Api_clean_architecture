import CreateUser from "../../application/use-cases/users/CreateUser.js";
import GetUserById from "../../application/use-cases/users/GetUserById.js";
import GetUsers from "../../application/use-cases/users/GetUsers.js";
import UserRepositoryMongo from "../repositories/UserRepositoryMongo.js";

const userRepository = new UserRepositoryMongo();
export const createUser = async (req, res) => {
  try {
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const getUsers = new GetUsers(userRepository);
    const users = await getUsers.execute();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const getUserById = new GetUserById(userRepository);
    const user = await getUserById.execute(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Implementar el Delete