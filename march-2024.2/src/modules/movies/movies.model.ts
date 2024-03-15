import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  rank: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 0,
  },
  big_image: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  imdbid: {
    type: String,
    required: true,
  },
  imdb_link: {
    type: String,
    required: true,
  },
});

export const Movie = model("Movie", movieSchema);
