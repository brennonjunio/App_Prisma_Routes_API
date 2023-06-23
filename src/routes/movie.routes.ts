import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMovieReleaseDateUseCaseController } from "../modules/movies/useCases/getMovieReleaseDate/GetMovieReleaseDateUseCaseController";

const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMovieReleaseDateUseCaseController =
  new GetMovieReleaseDateUseCaseController();

const movieRoutes = Router();
movieRoutes.get("/release", getMovieReleaseDateUseCaseController.handle);
movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
