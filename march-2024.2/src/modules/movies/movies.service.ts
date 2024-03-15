import { Movie } from "./movies.model";
import axios from "axios";

export const insertMovies = async (movies) => {
  try {
    const response = await Movie.insertMany(movies);
    return response;
  } catch (error) {
    console.log("Error occurred while inserting movie in db");
  }
};

export const getMoviesApi = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://imdb-top-100-movies.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "bc35c1f5f7mshc91314fd01724c2p1abde3jsn2bd33c2a9c63",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    if (response.data.length) {
      return response.data;
    } else {
      throw new Error("error getting movie from api");
    }
  } catch (error) {
    console.log("error getting movie from api");
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await Movie.findOne({ id });
    return response;
  } catch (error) {
    console.log("Error occurred while getting moviefrom db");
  }
};
export const getPaginatedMoviesService = async (query) => {
  try {
    const { page = 1, limit = 10 } = query;
    const movies = await Movie.find({})
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .exec();
    return movies;
  } catch (error) {
    console.log("Error occurred while getting paginated movie db");
  }
};
