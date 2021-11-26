import React, { useState } from "react";
import MainLayout from "../../HighOrderComponents/MainLayout";
import { useSelector, useDispatch } from "react-redux";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import MainBackground from "../../components/MainBackground/MainBackground";
import OffCanvasMediaList from "../../components/OffCanvasMediaList/OffCanvasMediaList";
import { useNavigate } from "react-router-dom";
import { DETAIL_URL } from "../../constants/routes";
import { getTvShowById, getMovieById } from "../../api/moviesCalls.js";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

import "./Home.scss";

function Home() {
  const movieInfo = useSelector((state) => state.moviesReducer);
  const appInfo = useSelector((state) => state.appReducer);
  const selectedInfo = useSelector((state) => state.selectedReducer);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function getMovieSelected(id) {
    setIsLoading(true);
    getMovieById(id).then((res) => {
      dispatch({
        type: "update/detailsPage",
        payload: res,
      });
      navigate(DETAIL_URL + "/" + id);
    });
  }

  function getTvShowSelected(id) {
    setIsLoading(true);
    getTvShowById(id).then((res) => {
      dispatch({
        type: "update/detailsPage",
        payload: res,
      });
      navigate(DETAIL_URL + "/" + id);
    });
  }

  return (
    <section className="MainBackground">
      <div className="home__main--section">
        <section className="info__main--section">
          <div className="d-flex flex-column gap-4">
            <h4>
              {selectedInfo?.position_number} from
              {movieInfo.movies.results?.length}
            </h4>
            <h1>{selectedInfo?.title || selectedInfo?.original_name}</h1>
            <h3>
              {selectedInfo?.release_date || selectedInfo?.first_air_date}
            </h3>
            <h5>{selectedInfo?.overview}</h5>
            <div className="d-flex justify-content-between align-items-center w-100 gap-3">
              <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                <h3>Popularity</h3>
                <h5>{selectedInfo?.popularity}</h5>
              </div>
              <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                <h3>vote count</h3>
                <h5>{selectedInfo?.vote_count}</h5>
              </div>
              <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                <h3>votes</h3>
                <h5>{selectedInfo?.vote_average}</h5>
              </div>
            </div>
            <LoadingButton
              disabled={isLoading}
              isSubmmiting={isLoading}
              sendingText="Loading..."
              idleText="More Info"
              handleClick={
                appInfo.selectedMedia === "movies"
                  ? () => {
                      getMovieSelected(selectedInfo?.id);
                    }
                  : () => {
                      getTvShowSelected(selectedInfo?.id);
                    }
              }
              className="btn btn-secondary"
            />
          </div>

          <div className="h-100 pt-5">
            {/* <h1>01 ---------------------- 02 03 04 05</h1> */}
          </div>
        </section>
        <section className="imageSlider__section">
          {appInfo.selectedMedia === "movies" ? (
            <ImagesCarousel mediaToRender={movieInfo.movies?.results} />
          ) : (
            <ImagesCarousel mediaToRender={movieInfo.tvShows?.results} />
          )}
        </section>
        <OffCanvasMediaList />
      </div>
      <MainBackground red="1.9" blue="0" green="2" />
    </section>
  );
}

export default MainLayout(Home);
