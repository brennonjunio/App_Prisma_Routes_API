import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const CreateUserController = new createUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);
userRoutes.get("/listar", getAllUsersController.handle);

export { userRoutes };
