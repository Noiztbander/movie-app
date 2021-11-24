import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import MainAside from "../components/MainAside/MainAside";
import "./MainLayout.scss";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function MainLayout(WrappedComponent) {
  WrappedComponent.displayName = `MainLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <section className="MainLayout">
        <MainHeader />
        <MainAside />
        <WrappedComponent {...props} />
      </section>
    );
  }

  return WrapperComponent;
}

export default MainLayout;
