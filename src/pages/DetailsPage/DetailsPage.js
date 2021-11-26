import React, { useEffect } from "react";
import MainLayout from "../../HighOrderComponents/MainLayout";
import MainBackground from "../../components/MainBackground/MainBackground";
import OffCanvasMediaList from "../../components/OffCanvasMediaList/OffCanvasMediaList";
import { getTvShowById, getMovieById } from "../../api/moviesCalls.js";

function DetailsPage() {
  useEffect(() => {
    console.log("cambió");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return (
    <section className="MainBackground">
      <div className="home__main--section">
        <OffCanvasMediaList />
      </div>
      <MainBackground red="1.9" blue="0" green="2" />
    </section>
  );
}

export default MainLayout(DetailsPage);
