import React, { useState, useEffect } from "react";
import DarkTheme from "./Assets/DarkTheme.png"
import LightTheme from "./Assets/LightTheme.png"
import "./Header.css";

const Header = ({isDarkMode, setIsDarkMode}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  function myFunction() {
    setIsDarkMode(!isDarkMode);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id="home" className={`headerContainer ${isNavOpen ? "nav-open" : ""}`}>
      <div className="logo">JW</div>
      <div className="navToggle" onClick={toggleNav}>
      <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
      <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
      <div className={`bar ${isNavOpen ? "open" : ""}`}></div>
    </div>
      <div className={`navLinksContainer ${isNavOpen ? "open" : ""}`}>
        <div className="homeLink" onClick={() => scrollToSection("home")}>Home</div>
        <div className="aboutLink" onClick={() => scrollToSection("about")}>About</div>
        <div className="projectsLink" onClick={() => scrollToSection("projects")}>Projects</div>
        <div className="contactLink" onClick={() => scrollToSection("contact")}>Contact</div>
      </div>

      <button className="themeButton" onClick={myFunction}>
        {isDarkMode ? <img src={LightTheme} /> : <img src={DarkTheme} />}
      </button>
    </header>
  );
};

export default Header;
