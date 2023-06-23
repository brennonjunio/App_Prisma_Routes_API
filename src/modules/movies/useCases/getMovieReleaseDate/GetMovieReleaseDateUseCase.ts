import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMovieReleaseDateUseCase {
  async execute(): Promise<Movie[]> {
    //busca de filmes pelo mais recente
    const movies = await prisma.movie.findMany({
      orderBy: { release_date: "desc" },

      //join, tras os resultados da outra tabel
      include: {
        movie_rent: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
