import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = ({isDarkMode}) => {
    const containerClassName = `footerContainer ${isDarkMode ? "dark-text" : ""}`;
  return (
    <footer className={containerClassName}>
      <p>&copy; 2024 Joe Whitworth Portfolio</p>
    </footer>
  );
};

export default Footer;