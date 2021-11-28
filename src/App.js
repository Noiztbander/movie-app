import React, { useEffect } from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import { HOME_URL, DETAIL_URL } from "./constants/routes";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/notFoundPage/notFoundPage";
import { useDispatch } from "react-redux";
import { getPopularMovies, getPopularTvShows } from "./api/moviesCalls";

import "./App.scss";

function App() {
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

  return (
    <HashRouter>
      <Routes>
        <Route path={HOME_URL} exact element={<Home />} />
        <Route path={DETAIL_URL + "/:id"} exact element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
