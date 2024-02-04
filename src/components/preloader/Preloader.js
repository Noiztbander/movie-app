"use client";

import { useRef } from "react";
import * as THREE from "three";
import "./Preloader.css";

const Preloader = ({ setPercent }) => {
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const manager = new THREE.LoadingManager();

  manager.onProgress = function (_item, loaded, total) {
    if (progressTextRef.current && progressBarRef.current) {
      progressBarRef.current.style.width = (loaded / total) * 100 + "%";
      progressTextRef.current.innerHTML = (loaded / total) * 100 + "%";
			setPercent(loaded * 100)
      console.log({ loaded, total });
    }
  };

  function addRandomPlaceHoldItImage() {
    var r = Math.round(Math.random() * 4000);
    new THREE.ImageLoader(manager).load("//picsum.photos/" + r + "/" + r);
  }

  for (var i = 0; i < 10; i++) addRandomPlaceHoldItImage();

  return (
    <div className="preloader">
      <div className="preloader__title">
        <h1>Loading...</h1>
        <h1 className="preloader__text" ref={progressTextRef}>
          0
        </h1>
      </div>

      <div className="preloader__container">
        <div className="preloader__progress" ref={progressBarRef}></div>
      </div>
    </div>
  );
};

export default Preloader;
