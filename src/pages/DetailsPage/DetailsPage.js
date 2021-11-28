import React from "react";
import MainLayout from "../../HighOrderComponents/MainLayout";
import { useSelector } from "react-redux";
import MainBackground from "../../components/MainBackground/MainBackground";
import OffCanvasMediaList from "../../components/OffCanvasMediaList/OffCanvasMediaList";
import { useFetchSelectedMovie } from "../../hooks/useFetchSelectedMovie";
import { useFetchSelectedtvShow } from "../../hooks/useFetchSelectedtvShow";

import "./DetailsPage.scss";

function DetailsPage() {
  const detailsInfo = useSelector((state) => state.detailsReducer);

  // hooks
  const { getMovieSelected } = useFetchSelectedMovie();
  const { getTvShowSelected } = useFetchSelectedtvShow();

  return (
    <section className="MainBackground">
      {!detailsInfo.loaded ? (
        <div className=" d-flex justify-content-center align-items-center w-100 h-100">
          <h1 className="text-dark">Nothing selected!</h1>
        </div>
      ) : (
        <div className="home__main--section">
          <section className="info__detailsPage--section">
            <div
              className="d-flex flex-column gap-4"
              style={{ paddingRight: "5vw" }}
            >
              <h1>{detailsInfo?.title || detailsInfo?.name}</h1>
              <h3>
                {detailsInfo?.release_date || detailsInfo?.first_air_date}
              </h3>
              <h3>
                {detailsInfo?.adult
                  ? "Contenido para adultos"
                  : "contenido familiar"}
              </h3>
              {detailsInfo?.overview === "" ? (
                <h5 className="text-danger">No description</h5>
              ) : (
                <h5>{detailsInfo?.overview}</h5>
              )}
              <div className="d-flex justify-content-between align-items-center w-100 gap-3">
                <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                  <h3>Popularity</h3>
                  <h5>{detailsInfo?.popularity}</h5>
                </div>
                <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                  <h3>vote count</h3>
                  <h5>{detailsInfo?.vote_count}</h5>
                </div>
                <div className="d-flex flex-column justify-content-start aling-items-center gap-3">
                  <h3>vote average</h3>
                  <h5>{detailsInfo?.vote_average}</h5>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-center w-100 gap-3">
                <h4>Genres:</h4>
                {detailsInfo?.genres?.map((genre) => (
                  <h5 key={genre.id}>{genre.name}</h5>
                ))}
              </div>
              <div className="d-flex flex-column justify-content-start align-items-start w-100 gap-3">
                <h4>Production companies:</h4>
                {detailsInfo?.production_companies?.map((company) => (
                  <h5 key={company.id}>{company.name}</h5>
                ))}
              </div>
              {detailsInfo?.budget && (
                <div className="d-flex justify-content-start align-items-center w-100 gap-3">
                  <h4>Budget:</h4>

                  <h5>{detailsInfo?.budget}$</h5>
                </div>
              )}

              <div className="d-flex justify-content-start align-items-center w-100 gap-3">
                <h4>Official Home Page:</h4>
                <a
                  href={detailsInfo?.homepage}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>{detailsInfo?.homepage}</h5>
                </a>
              </div>
            </div>
            <div className="relatedMovies pt-4">
              <h2 className="pb-4">
                {detailsInfo?.mediaType === "movie"
                  ? "Related movies"
                  : "Related Tv Shows"}
              </h2>
              <ul>
                {detailsInfo?.related.map((related, index) => (
                  <li key={"relatedMedia" + related.id + index}>
                    <div
                      onClick={
                        detailsInfo?.mediaType === "movie"
                          ? () => {
                              getMovieSelected(related.id);
                            }
                          : () => {
                              getTvShowSelected(related.id);
                            }
                      }
                      className="relatedMovies__images--container"
                    >
                      <img
                        alt=""
                        src={
                          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
                          related?.poster_path
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="image__detailsPage--container">
            <div className="image__detailsPage--image--container">
              {detailsInfo?.poster_path === null ? (
                <img
                  alt="film-pic"
                  src="https://res.cloudinary.com/partycle/image/upload/v1634344600/defaultThumnailPlaylist_rwsh0u.jpg"
                />
              ) : (
                <img
                  alt="film-pic"
                  src={
                    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
                    detailsInfo?.poster_path
                  }
                />
              )}
            </div>
          </section>
          <div className="image__detailsPage--image--backdrop--container">
            {detailsInfo?.backdrop_path !== "" && (
              <img
                alt="backdrop-pic"
                src={
                  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                  detailsInfo?.backdrop_path
                }
              />
            )}
          </div>
        </div>
      )}

      <OffCanvasMediaList />
      <div className="blur__images--detailsPage"></div>
      <MainBackground red="0.2" blue="0.1" green="0.2" />
    </section>
  );
}

export default MainLayout(DetailsPage);
