import { AppError } from "../../../../errors/errors";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userID }: CreateMovieRentDTO): Promise<void> {
    //verificar se filme existe

    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movieExists) {
      throw new AppError("Movie does not exists");
    }
    //verificar se o filme já está alugado

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("Filme já esta alugado");
    }
    //verificar se o usuario existe

    const userExists = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    if (!userExists) {
      throw new AppError("Usuario Não existe");
    }
    //criar locacao

    await prisma.movieRent.create({
      data: {
        movieId,
        userID,
      },
    });
  }
}
