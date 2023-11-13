import { useState, useEffect } from "react";
import technogies from "/src/data/technologies";

function TechnologyIcon ({ technology }) {

  const allTechnologies = { ...technogies.frontend, ...technogies.backend, ...technogies.other };
  const technologyIcon = allTechnologies[technology];
  

  return (
    <>
      {technologyIcon && <img className="technology-icon" src={technologyIcon} alt={technology} title={technology} />}
    </>
  )
}

export default TechnologyIcon;