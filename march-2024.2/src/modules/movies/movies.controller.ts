import { Request, Response, NextFunction } from "express";
import {
  getMovieById,
  getMoviesApi,
  getPaginatedMoviesService,
  insertMovies,
} from "./movies.service";
import { Movie } from "./movies.model";

export const insertMoviesInDb = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const movies = await getMoviesApi();
    if (movies.length) {
      await insertMovies(movies);
      return res.status(200).json({ success: true, data: movies });
    } else {
      throw new Error("No movies found");
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const getMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const id = req.params.id;

    const movie = await getMovieById(id);
    if (movie !== null) {
      return res.status(200).json({ success: true, data: movie });
    } else {
      throw new Error("No movie found");
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const getPaginatedMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await getPaginatedMoviesService(req.query);

    res.status(200).json({
      data: movies,
      success: true,
    });
  } catch (err) {
    console.error(err.message);
  }
};
