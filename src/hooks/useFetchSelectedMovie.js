import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DETAIL_URL } from "../constants/routes";
import { getMovieById, getRelatedMovies } from "../api/moviesCalls";

export const useFetchSelectedMovie = ( ) => {
  const [loadingMovies, setLoadingMovies] = useState(false);

  const navigate = useNavigate();
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
        navigate(DETAIL_URL + "/" + id);
      });
    });
  }

  return { loadingMovies, getMovieSelected };
};
