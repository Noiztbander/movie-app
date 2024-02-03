"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTvShowById, getRelatedTvShows } from "../api/moviesCalls";

export const useFetchSelectedtvShow = () => {
  const [loadingTvShows, setLoadingTvShows] = useState(false);

  const dispatch = useDispatch();

  function getTvShowSelected(id) {
    setLoadingTvShows(true);
    getTvShowById(id).then((res) => {
      getRelatedTvShows(res.id).then((related) => {
        dispatch({
          type: "update/detailsPage",
          payload: {
            mediaType: "tvShow",
            related: related.results,
            loaded: true,
            ...res,
          },
        });
      });
    });
  }

  return { loadingTvShows, getTvShowSelected };
};
