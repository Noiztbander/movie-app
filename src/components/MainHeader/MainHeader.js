import React from "react";
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/routes";
import { useSelector } from "react-redux";
import PhoneBurger from "../PhoneBurger/PhoneBurger";

import "./MainHeader.scss";

function MainHeader() {
  const queryInfo = useSelector((state) => state.queryReducer);

  return (
    <header className="App-header px-3">
      <div
        style={{ width: "100%", height: "100px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <div className="logo__container">
          <Link to={HOME_URL}>
            <h3>MOVIE APP</h3>
          </Link>
        </div>
        {queryInfo.desktop ? (
          <div
            style={{ width: "350px" }}
            className="d-flex gap-4 justify-content-center align-items-center"
          >
            <i className="fas fa-chevron-down text-black"></i>
            <div className="profilePicture__container">
              <img
                src="https://res.cloudinary.com/partycle/image/upload/v1634826606/users/Bg778POM2maxqDbLpNw35RMo8IM2/profile/Bg778POM2maxqDbLpNw35RMo8IM2.jpg"
                alt="profile-img"
              />
            </div>
            <h5 className="textPlaylistHeader">Erick Noiztbander</h5>
            <i className="fas fa-search text-black"></i>
          </div>
        ) : (
          <PhoneBurger />
        )}
      </div>
    </header>
  );
}

export default MainHeader;
