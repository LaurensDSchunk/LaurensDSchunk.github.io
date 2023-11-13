import { useState, useEffect } from "react";
import "./Projects.scss";

import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("src/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

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
