import React from "react";
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/routes";

// import logo from "../../assets/movie-app_no_background.png";
import "./MainHeader.scss";

function MainHeader() {
  return (
    <header className="App-header px-3">
      <div
        style={{ width: "100%", height: "100px" }}
        className="d-flex justify-content-between align-items-center"
      >
        {/* <div className="logo__container">
          <img alt="logo_image" src={logo} />
        </div> */}
        <div className="logo__container">
          <Link to={HOME_URL}>
            <h3>MOVIE APP</h3>
          </Link>
        </div>

        <div
          style={{ width: "350px" }}
          className="d-flex gap-4 justify-content-center align-items-center"
        >
          <i className="fas fa-chevron-down text-white"></i>
          <div className="profilePicture__container">
            <img
              src="https://res.cloudinary.com/partycle/image/upload/v1634826606/users/Bg778POM2maxqDbLpNw35RMo8IM2/profile/Bg778POM2maxqDbLpNw35RMo8IM2.jpg"
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
