import { Router } from "express";
import { createUserController } from "../modules/users/useCases/createUser/CreateUserController";

const CreateUserController = new createUserController();

const userRoutes = Router();

userRoutes.post("/", CreateUserController.handle);

export { userRoutes };
