import React from "react";
import MainLayout from "../../HighOrderComponents/MainLayout";
import { useSelector } from "react-redux";
import "./Home.scss";

function Home() {
  const movieInfo = useSelector((state) => state.moviesReducer);
  const selectedInfo = useSelector((state) => state.selectedReducer);
  return (
    <section className="home__main--section">
      <section className="text__section">
        <div className="d-flex flex-column gap-4 px-4">
          <h4>{movieInfo.movies.results?.length}</h4>
          <h1>{selectedInfo?.title}</h1>
          <h3>{selectedInfo?.release_date}</h3>
          <h5>{selectedInfo?.overview}</h5>
          <div className="d-flex justify-content-between align-items-center w-100 gap-3">
            <div className="d-flex flex-column justify-content-start aling-items-center">
              <h3>Popularity</h3>
              <h5>{selectedInfo?.vote_average}</h5>
            </div>
            <div className="d-flex flex-column justify-content-start aling-items-center">
              <h3>Popularity</h3>
              <h5>{selectedInfo?.vote_average}</h5>
            </div>
            <div className="d-flex flex-column justify-content-start aling-items-center">
              <h3>Popularity</h3>
              <h5>{selectedInfo?.vote_average}</h5>
            </div>
          </div>
        </div>
        <div>
          <h1>01 ----------------------  02 03 04 05</h1>
        </div>
      </section>
      <section className="imageSlider__section">
        <h1>01 02 03 04 05</h1>
      </section>
    </section>
  );
}

export default MainLayout(Home);
