import { useState, useEffect } from "react";
import "./Projects.scss";
import projects from "/src/data/projects";
import Project from "./Project";

function Projects() {


  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key = {index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
