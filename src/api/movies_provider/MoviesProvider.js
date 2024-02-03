"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPopularMovies, getPopularTvShows } from "@/api/moviesCalls";

const MoviesProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies().then((response) => {
      dispatch({
        type: "getAllMovies/movies",
        payload: response,
      });
      dispatch({
        type: "updateSelectedMedia/movie",
        payload: { position_number: 1, ...response.results[0] },
      });
    });
    getPopularTvShows().then((response) => {
      dispatch({
        type: "getAllTvShows/movies",
        payload: response,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1300px)")
      .addListener(handleSuperLargeDesktop);
    window.matchMedia("(min-width: 1000px)").addListener(handleDesktop);
    window.matchMedia("(min-width: 700px)").addListener(handleTablet);
    window.matchMedia("(min-width: 500px)").addListener(handlePhone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSuperLargeDesktop(e) {
    dispatch({
      type: "update/mediaquery",
      payload: {
        superLargeDesktop: e.matches,
      },
    });
  }

  function handleDesktop(e) {
    dispatch({
      type: "update/mediaquery",
      payload: {
        desktop: e.matches,
      },
    });
  }

  function handleTablet(e) {
    dispatch({
      type: "update/mediaquery",
      payload: {
        tablet: e.matches,
      },
    });
  }

  function handlePhone(e) {
    dispatch({
      type: "update/mediaquery",
      payload: {
        mobile: e.matches,
      },
    });
  }

  return children;
};

export default MoviesProvider;
