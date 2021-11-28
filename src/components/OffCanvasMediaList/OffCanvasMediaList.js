import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchSelectedMovie } from "../../hooks/useFetchSelectedMovie";
import { useFetchSelectedtvShow } from "../../hooks/useFetchSelectedtvShow";

import "./OffCanvasMediaList.scss";

export default function OffCanvasMediaList() {
  const movieInfo = useSelector((state) => state.moviesReducer);
  const [showMovies, setShowMovies] = useState(true);

  // hooks
  const { loadingMovies, getMovieSelected } = useFetchSelectedMovie();
  const { loadingTvShows, getTvShowSelected } = useFetchSelectedtvShow();

  return (
    <div
      className="offcanvas offcanvas-start offCanvasMediaList__main--container"
      tabIndex="-1"
      id="offCanvasMediaList"
      aria-labelledby="offCanvasMediaListLabel"
    >
      <div className="pt-4">
        <div className="d-flex justify-content-center gap-3 align-items-end w-100">
          <h3
            onClick={() => {
              setShowMovies(true);
            }}
            style={
              showMovies
                ? { borderBottom: "2px solid white", cursor: "pointer" }
                : { cursor: "pointer" }
            }
            className="offcanvas-title"
          >
            Movies
          </h3>
          <h3
            onClick={() => {
              setShowMovies(false);
            }}
            style={
              !showMovies
                ? { borderBottom: "2px solid white", cursor: "pointer" }
                : { cursor: "pointer" }
            }
            className="offcanvas-title"
          >
            Tv Shows
          </h3>
          <button
            type="button"
            className="btn btn-secondary btn-sm btn__close d-flex"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="offcanvas-body">
        <section className="offCanvasMediaList__body">
          {showMovies ? (
            <>
              {movieInfo.movies.results?.map((media, index) => (
                <ListItem
                  key={"listMovieItem-" + media.id + index}
                  isLoading={loadingMovies}
                  media={media}
                  index={index}
                  handleClick={() => getMovieSelected(media.id)}
                />
              ))}
            </>
          ) : (
            <>
              {movieInfo.tvShows.results?.map((media, index) => (
                <ListItem
                  key={"listTvShowItem-" + media.id + index}
                  isLoading={loadingTvShows}
                  media={media}
                  index={index}
                  handleClick={() => getTvShowSelected(media.id)}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

function ListItem({ media, index, handleClick = () => {} }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      onClick={() => {
        setIsLoading(true);
        handleClick(media.id);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }}
      key={"listItem-" + index}
      className="offCanvasMediaList__item d-flex w-100 justify-content-between align-items-center px-4"
    >
      <div className="d-flex flex-column aling-items-center justify-content-between gap-2">
        <div className="d-flex gap-2">
          <h5 className="truncate" style={{ maxWidth: "25vw" }}>
            {media.title || media.original_name}
          </h5>
          {isLoading && (
            <div
              className="spinner-border spinner-border-sm text-white"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>

        <p>Vote average: {media.vote_average}</p>
      </div>
      <div className="picture__miniature">
        {media.poster_path === null ? (
          <img
            alt="film-pic"
            src="https://res.cloudinary.com/partycle/image/upload/v1634344600/defaultThumnailPlaylist_rwsh0u.jpg"
          />
        ) : (
          <img
            alt="film-pic"
            src={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
              media.poster_path
            }
          />
        )}
      </div>
    </div>
  );
}
