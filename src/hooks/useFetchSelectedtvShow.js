import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DETAIL_URL } from "../constants/routes";
import { getTvShowById, getRelatedTvShows } from "../api/moviesCalls";

export const useFetchSelectedtvShow = () => {
  const [loadingTvShows, setLoadingTvShows] = useState(false);

  const navigate = useNavigate();
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
        navigate(DETAIL_URL + "/" + id);
      });
    });
  }

  return { loadingTvShows, getTvShowSelected };
};
