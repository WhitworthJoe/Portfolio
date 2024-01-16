import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function myFunction() {
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className="headerContainer">
      <div className="logo">JW</div>
      <div className="pageLinkContainer">
        <div className="homeLink">Home</div>
        <div className="aboutLink">About</div>
        <div className="projectsLink">Projects</div>
        <div className="contactLink">Contact</div>
      </div>

      <button className="themeButton" onClick={myFunction}>
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
};

export default Header;
