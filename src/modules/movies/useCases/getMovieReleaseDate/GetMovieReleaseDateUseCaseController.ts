import { Request, Response } from "express";
import { GetMovieReleaseDateUseCase } from "./GetMovieReleaseDateUseCase";

export class GetMovieReleaseDateUseCaseController {
  async handle(req: Request, res: Response) {
    const getMovieReleaseDateUseCase = new GetMovieReleaseDateUseCase();

    const result = await getMovieReleaseDateUseCase.execute();

    return res.status(201).json(result);
  }
}
