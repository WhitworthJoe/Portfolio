import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="projectsHeader">My Recent Projects</h1>
      <div className="projects">
        <div className="projectBox">
          <h1>Resource Rivals</h1>
          <h2>
            A 2-player, full-stack browser card game, inspired by the classic
            card game Jaipur.
          </h2>
        </div>
        <div className="projectBox">
          <h1>Crowley's News Back-End</h1>
          <h2>Crafting the Database Magic: SQL/PSQL</h2>
        </div>
        <div className="projectBox">
          <h1>Crowley's News Front-End</h1>
          <h2>
            Dynamic web application designed to deliver news articles with a
            focus on community interaction.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
