import React, { useState } from "react";
import "./PhoneBurger.css";

function PhoneBurger() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleBurgerAnimation() {
    const menuBtn = document.querySelector(".menu-btn");

    if (!menuOpen) {
      menuBtn.classList.add("open");
      setMenuOpen(true);
    } else {
      menuBtn.classList.remove("open");
      setMenuOpen(false);
    }
  }

  return (
    <div onClick={handleBurgerAnimation} className="menu-btn">
      <div className="menu-btn__burger"></div>
    </div>
  );
}

export default PhoneBurger;
