"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieById, getRelatedMovies } from "../api/moviesCalls";

export const useFetchSelectedMovie = () => {
  const [loadingMovies, setLoadingMovies] = useState(false);

  const dispatch = useDispatch();

  function getMovieSelected(id) {
    setLoadingMovies(true);
    getMovieById(id).then((res) => {
      getRelatedMovies(res.id).then((related) => {
        dispatch({
          type: "update/detailsPage",
          payload: {
            mediaType: "movie",
            related: related.results,
            loaded: true,
            ...res,
          },
        });
      });
    });
  }

  return { loadingMovies, getMovieSelected };
};
