import { config } from "../config/config";
import { MOVIEDB_API } from "../constants/routes";

export async function getPopularMovies(
  params = `/3/discover/movie?api_key=${config.movieDB.MovieDbApiKey}`,
) {
  return fetch(`${MOVIEDB_API}` + params, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getPopularTvShows(
  params = `/3/discover/tv?api_key=${config.movieDB.MovieDbApiKey}`,
) {
  return fetch(`${MOVIEDB_API}` + params, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

// Path para la foto
// https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mGPdWEEmfzP7VQBQsXrFt1b1ikQ.jpg
