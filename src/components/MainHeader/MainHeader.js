import React from "react";

import logo from "../../assets/movie-app_no_background.png";
import "./MainHeader.scss";

function MainHeader() {
  return (
    <header className="App-header px-3">
      <div
        style={{ width: "100%", height: "100px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="logo__container">
          <img alt="logo_image" src={logo} />
        </div>
        <div
          style={{ width: "300px" }}
          className="d-flex  gap-4 justify-content-center align-items-center"
        >
          <div className="profilePicture__container">
            <img
              src="https://res.cloudinary.com/partycle/image/upload/v1632697772/default_profile.png"
              alt="profile-img"
            />
          </div>
          <h5 className="textPlaylistHeader">Erick Noiztbander</h5>
          <i className="fas fa-search text-white"></i>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
