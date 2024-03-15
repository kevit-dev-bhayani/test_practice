import { Router } from "express";
import {
  getMovie,
  getPaginatedMovies,
  insertMoviesInDb,
} from "./movies.controller";

export const router = Router();

const route = "movie";

router.get(`/${route}/movies`, insertMoviesInDb);
router.get(`/${route}/:id`, getMovie);
router.get(`/${route}`, getPaginatedMovies);
