import { Router } from "express";
import { createUser, getUsers, getUserById} from "../controllers/userControllers.js";

const router = Router();

router.post("/users/", createUser);
router.get("/users/", getUsers);
router.get("/users/:id", getUserById);

export default router;
