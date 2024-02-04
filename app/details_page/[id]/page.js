"use client";

import { Provider } from "react-redux";
import { reduxStore } from "@/redux/store";
import DetailsPage from "@/pages/details_page/DetailsPage";
import MoviesProvider from "@/api/movies_provider/MoviesProvider";

export default function Details() {
  return (
    <Provider store={reduxStore || {}}>
      <MoviesProvider>
        <DetailsPage />
      </MoviesProvider>
    </Provider>
  );
}
