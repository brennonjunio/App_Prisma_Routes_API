import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { createUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/errors";

export class createUserUseCase {
  async execute({ name, email }: createUserDTO): Promise<User> {
    //verificar se o usuario já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("Usuario Já existe");
    }
    //caso não tenha o usuario, criar novo

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
