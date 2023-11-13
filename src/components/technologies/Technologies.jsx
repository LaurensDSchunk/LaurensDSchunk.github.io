import { useState, useEffect } from "react";

import "./Technologies.scss";
import Technology from "./Technology";

function Technologies() {
  const [frontendTechnologies, setFrontendTechnologies] = useState([]);
  const [backendTechnologies, setBackendTechnologies] = useState([]);

  useEffect(() => {
    fetch("src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setFrontendTechnologies(data.frontend);
        setBackendTechnologies(data.backend);
      })
      .catch((error) => console.error(error));
  }, []);

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
