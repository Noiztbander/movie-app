import React from "react";
import { HOME_URL } from "@/routes";
import { useSelector } from "react-redux";
import PhoneBurger from "../PhoneBurger/PhoneBurger";
import Link from "next/link";

import "./MainHeader.css";
import Image from "next/image";

function MainHeader() {
  const queryInfo = useSelector((state) => state.queryReducer);

  return (
    <header className="App-header px-3">
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div className="logo__container">
          <Link href={HOME_URL}>
            <h3>MOVIE APP</h3>
          </Link>
        </div>
        {queryInfo.desktop ? (
          <a
            href="https://github.com/Noiztbander/movie-app"
            target="_blank"
            rel="noreferrer"
            style={{
              width: "350px",
            }}
            className="d-flex gap-4 justify-content-center align-items-center">
            <i className="fas fa-chevron-down text-black"></i>
            <div className="profilePicture__container">
              <Image
                width={30}
                height={30}
                src="/images/profile_picture.jpg"
                alt="profile-img"
              />
            </div>
            <h5 className="textPlaylistHeader">Erick Noiztbander</h5>
            <i className="fas fa-search text-black"></i>
          </a>
        ) : (
          <PhoneBurger />
        )}
      </div>
    </header>
  );
}

export default MainHeader;
