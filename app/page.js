"use client";

import { reduxStore } from "@/redux/store";
import { Provider } from "react-redux";
import HomePage from "@/pages/home/index";
import MoviesProvider from "@/api/movies_provider/MoviesProvider";

export default function Home() {
  return (
    <Provider store={reduxStore}>
      <MoviesProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          async
        />
        <HomePage />
      </MoviesProvider>
    </Provider>
  );
}
