import { useState, useEffect } from "react";

import "./Technologies.scss";
import Technology from "./Technology";
import technologies from "/src/data/technologies";

function Technologies() {
  const frontendTechnologies = technologies.frontend;
  const backendTechnologies = technologies.backend;

  return (
    <div className="technologies">
      <div className="categories">
        <div className="technology-catergory">
          <h2>Frontend Technologies</h2>
          <div className="technologies-grid">
            {Object.entries(frontendTechnologies).map(([key, value]) => (
              <Technology key={key} img={value} name={key} />
            ))}
          </div>
        </div>
        <div className="technology-catergory">
          <h2>Backend Technologies</h2>
          <div className="technologies-grid">
            {Object.entries(backendTechnologies).map(([key, value]) => (
              <Technology key={key} img={value} name={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
