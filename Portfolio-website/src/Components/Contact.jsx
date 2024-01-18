import React from "react";
import "./Contact.css";
import githubIconDark from "./Assets/github-icon.png";
import githubIconLight from "./Assets/github-icon-light.png";
import linkedinIcon from "./Assets/LinkedIn_icon.svg.png";

const Contact = ({ isDarkMode }) => {
  const containerClassName = `contactContainer ${isDarkMode ? "dark-text" : ""}`;
  const cvContainer = `cvContainer ${isDarkMode ? "dark-text" : ""}`;

  return (
    <div id="contact" className={containerClassName}>
      <div className="contactHeaderContainer">
        <h1 className="contactHeader">Contact Me</h1>
        <h2 className="contactUnderHeader">
          with any development opportunities you may have!
        </h2>
      </div>
      <div className="contactInfo">
        <div className="contactItem">
          <h2>Email:</h2>
          <p>Whitworthjoe02@gmail.com</p>
        </div>
        <div className="contactItem">
          <h2>Phone:</h2>
          <p>+44 755 7951 445</p>
        </div>
        <div className="contactItem">
          <a
            href="https://www.linkedin.com/in/joe-whitworth-95408b91/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon Link"
              className="linkedin"
            />
          </a>
        </div>
        <div className="contactItem">
          <a
            href="https://github.com/WhitworthJoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isDarkMode ? (
              <img
                src={githubIconDark}
                className="githubDark"
                alt="Github Icon Link"
              />
            ) : (
              <img
                src={githubIconLight}
                className="githubLight"
                alt="Github Icon Link"
              />
            )}
          </a>
        </div>
        <a className="cvButtonLink" href="./src/Components/Assets/JoeWhitworthCV.docx" download="JoeWhitworthCV.docx">
        <button className={cvContainer}>Download CV</button>
      </a>
      </div>
    </div>
  );
};

export default Contact;
