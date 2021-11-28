import React from "react";
import MainLayout from "../../HighOrderComponents/MainLayout";
import { useSelector } from "react-redux";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";
import MainBackground from "../../components/MainBackground/MainBackground";
import OffCanvasMediaList from "../../components/OffCanvasMediaList/OffCanvasMediaList";
import { useFetchSelectedtvShow } from "../../hooks/useFetchSelectedtvShow";
import { useFetchSelectedMovie } from "../../hooks/useFetchSelectedMovie";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

import "./Home.scss";

function Home() {
  const movieInfo = useSelector((state) => state.moviesReducer);
  const appInfo = useSelector((state) => state.appReducer);
  const selectedInfo = useSelector((state) => state.selectedReducer);

  // hooks
  const { loadingMovies, getMovieSelected } = useFetchSelectedMovie();
  const { loadingTvShows, getTvShowSelected } = useFetchSelectedtvShow();

  return (
    <section className="MainBackground">
      <div className="home__main--section">
        <section className="info__main--section">
          <div className="d-flex flex-column gap-4">
            <h4>
              {selectedInfo?.position_number} from
              {movieInfo.movies.results?.length}
            </h4>
            <h1>{selectedInfo?.title || selectedInfo?.name}</h1>
            <h3>
              {selectedInfo?.release_date || selectedInfo?.first_air_date}
            </h3>
            {selectedInfo?.overview === "" ? (
              <h5 className="text-danger">No description</h5>
            ) : (
              <h5 className="truncate__height" style={{ maxHeight: "20vh" }}>
                {selectedInfo?.overview}
              </h5>
            )}

            <div className="d-flex justify-content-between align-items-center w-100 gap-3">
              <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                <h3>vote average</h3>
                <h5>{selectedInfo?.vote_average}</h5>
              </div>
            </div>

            <LoadingButton
              disabled={loadingMovies || loadingTvShows}
              isSubmmiting={loadingMovies || loadingTvShows}
              sendingText="Loading..."
              idleText="MORE INFO"
              handleClick={
                appInfo.selectedMedia === "movies"
                  ? () => {
                      getMovieSelected(selectedInfo?.id);
                    }
                  : () => {
                      getTvShowSelected(selectedInfo?.id);
                    }
              }
              className="loadingButtom"
            />
          </div>
        </section>
        <section className="imageSlider__section">
          {appInfo.selectedMedia === "movies" ? (
            <ImagesCarousel mediaToRender={movieInfo.movies?.results} />
          ) : (
            <ImagesCarousel mediaToRender={movieInfo.tvShows?.results} />
          )}
        </section>
      </div>
      <OffCanvasMediaList />
      <div className="blur__images"></div>
      <MainBackground red="0.2" blue="0.1" green="0.2" />
    </section>
  );
}

export default MainLayout(Home);
