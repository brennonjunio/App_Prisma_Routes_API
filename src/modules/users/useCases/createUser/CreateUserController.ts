import { Request, Response } from "express";
import { createUserUseCase } from "./CreateUserUseCase";

export class createUserController {
  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    const CreateUserUseCase = new createUserUseCase();

    const result = await CreateUserUseCase.execute({
      name,
      email,
    });
    return res.status(201).json(result);
  }
}
