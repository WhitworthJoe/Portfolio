import React from "react";
import CrowleysAPI from "./Assets/CrowleysAPI.png";
import CrowleysColumn from "./Assets/CrowleysColumn.png";
import ResourceRivals from "./Assets/ResourceRivals.png";
import "./Projects.css";

const Projects = ({ isDarkMode }) => {
  const projectsContainerClassName = `projectsContainer ${
    isDarkMode ? "dark-text" : ""
  }`;
  const projectsBoxClassName = `projectsBox ${isDarkMode ? "dark-text" : ""}`;
  return (
    <div id="projects" className={projectsContainerClassName}>
      <h1 className="projectsHeader">My Recent Projects</h1>
      <div className="projects">
        <a
          href="https://resource-rivals.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={projectsBoxClassName}>
            <img className="projectImages" src={ResourceRivals} />
            <h1>Resource Rivals</h1>
            <h2>
              A 2-player, full-stack browser card game, inspired by the classic
              card game Jaipur.
            </h2>
          </div>
        </a>

        <a
          href="https://crowleyscolumn.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={projectsBoxClassName}>
            <img className="projectImages" src={CrowleysColumn} />
            <h1>Crowley's News Front-End</h1>
            <h2>
              Dynamic web application designed to deliver news articles with a
              focus on community interaction.
            </h2>
          </div>
        </a>
        <a
          href="https://crowleysnewsapi.onrender.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={projectsBoxClassName}>
            <img className="projectImages" src={CrowleysAPI} />
            <h1>Crowley's News Back-End</h1>
            <h2>Crafting the Database Magic: SQL/PSQL</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
