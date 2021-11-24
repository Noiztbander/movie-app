import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      console.log(response);
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
      console.log(response);
      dispatch({
        type: "getAllTvShows/movies",
        payload: response,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} exact element={<Home />} />
        <Route path={DETAIL_URL} exact element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
