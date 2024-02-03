import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { HOME_URL } from "@/routes";
import "./MainAside.css";

function MainAside() {
  const movieInfo = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  function handleActiveLink(event) {
    const asideNav = document.querySelectorAll(
      "nav.sideMenu__main--container > ul > li > h4",
    );
    asideNav.forEach((link) => link.classList.remove("activeLink"));
    const asideLink = document.querySelectorAll(
      "nav.sideMenu__main--container > ul > li > a > h4",
    );
    asideLink.forEach((link) => link.classList.remove("activeLink"));
    const selectedLink = document.getElementById(event.target.id);
    selectedLink.classList.add("activeLink");
  }

  function deleteBorderOnImages() {
    const imagesCarousel = document.querySelectorAll(
      ".imagesCarousel__container > ul > li > div >img",
    );
    imagesCarousel.forEach((image) => image.classList.remove("borderImage"));
  }

  function displayAllMovies() {
    dispatch({
      type: "toggleMedia/app",
      payload: "movies",
    });
    dispatch({
      type: "updateSelectedMedia/movie",
      payload: { position_number: 1, ...movieInfo.movies.results[0] },
    });
  }
  function displayAllShows() {
    dispatch({
      type: "toggleMedia/app",
      payload: "shows",
    });
    dispatch({
      type: "updateSelectedMedia/movie",
      payload: { position_number: 1, ...movieInfo.tvShows.results[0] },
    });
  }

  return (
    <nav className="sideMenu__main--container">
      <ul>
        <li
          onClick={(event) => {
            handleActiveLink(event);
          }}
        >
          <h4 id="about__link">About</h4>
        </li>

        <li
          onClick={(event) => {
            handleActiveLink(event);
            displayAllMovies();
            deleteBorderOnImages();
          }}
        >
          <h4 id="movies__link">Movies</h4>
        </li>
        <li
          onClick={(event) => {
            handleActiveLink(event);
            displayAllShows();
            deleteBorderOnImages();
          }}
        >
          <h4 id="shows__link">TV Shows</h4>
        </li>
        <li
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasMediaList"
          aria-controls="offCanvasMediaList"
          onClick={(event) => {
            handleActiveLink(event);
          }}
        >
          <h4 id="list_link">list</h4>
        </li>

        <li
          onClick={(event) => {
            handleActiveLink(event);
          }}
        >
          <Link href={HOME_URL}>
            <h4 id="home__link">Home</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainAside;
