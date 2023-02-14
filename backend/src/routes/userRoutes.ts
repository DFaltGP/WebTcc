import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController";
import { DeleteUserController } from "../controllers/deleteUserController";
import { GetUserByCreateDateController } from "../controllers/getUserController";

const createUserController = new CreateUserController();
const getUserByCreateDateController = new GetUserByCreateDateController();
const deleteUser = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/allUsers", getUserByCreateDateController.handle)
userRoutes.delete("/deleteUser/:id", deleteUser.handle)

export { userRoutes }