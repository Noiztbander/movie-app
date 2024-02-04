"use client";

import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import MainAside from "../components/MainAside/MainAside";
import { reduxStore } from "@/redux/store";
import { Provider } from "react-redux";
import MoviesProvider from "@/api/movies_provider/MoviesProvider";
import "./MainLayout.css";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function MainLayout(WrappedComponent) {
  WrappedComponent.displayName = `MainLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <Provider store={reduxStore || {}}>
        <MoviesProvider>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            async
          />
          <section className="MainLayout">
            <MainHeader />
            <MainAside />
            <WrappedComponent {...props} />
          </section>
        </MoviesProvider>
      </Provider>
    );
  }

  return WrapperComponent;
}

export default MainLayout;
