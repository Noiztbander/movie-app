import { config } from "../config/config";
import { MOVIEDB_API } from "../constants/routes";

export async function getPopularMovies() {
  return fetch(
    `${MOVIEDB_API}/3/discover/movie?api_key=${config.movieDB.MovieDbApiKey}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getPopularTvShows() {
  return fetch(
    `${MOVIEDB_API}/3/discover/tv?api_key=${config.movieDB.MovieDbApiKey}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getMovieById(id = "", params = ` &language=en-US`) {
  return fetch(
    `${MOVIEDB_API}/3/movie/${id}?api_key=${config.movieDB.MovieDbApiKey}` +
      params,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}
export async function getTvShowById(id = "", params = ` &language=en-US`) {
  return fetch(
    `${MOVIEDB_API}/3/tv/${id}?api_key=${config.movieDB.MovieDbApiKey}` +
      params,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getRelatedMovies(
  id = "",
  params = ` &language=en-US&page=1`,
) {
  return fetch(
    `${MOVIEDB_API}/3/movie/${id}/similar?api_key=${config.movieDB.MovieDbApiKey}` +
      params,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getRelatedTvShows(
  id = "",
  params = ` &language=en-US&page=1`,
) {
  return fetch(
    `${MOVIEDB_API}/3/tv/${id}/similar?api_key=${config.movieDB.MovieDbApiKey}` +
      params,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${config.movieDB.MovieDbAccessToken}`,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}
