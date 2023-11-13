import { useState, useEffect } from "react";

function TechnologyIcon ({ technology }) {
  const [technologyIcon, setTechnologyIcon] = useState();

  useEffect(() => {
    fetch("src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        const allTechnologies = { ...data.frontend, ...data.backend, ...data.other };
        setTechnologyIcon(allTechnologies[technology]);
      })
      .catch((error) => console.error(error));
  });

  return (
    <>
      {technologyIcon && <img className="technology-icon" src={technologyIcon} alt={technology} title={technology} />}
    </>
  )
}

export default TechnologyIcon;