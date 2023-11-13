import { useRef } from "react";
import TechnologyIcon from "./TechnologyIcon";

function Project({ img, name, link, description, technologies }) {
  const dialogRef = useRef();

  const openModal = () => {
    dialogRef.current.showModal();
    document.body.classList.add('modal-open');
  }

  const closeModal = () => {
    dialogRef.current.close();
    document.body.classList.remove('modal-open');
  }

  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      closeModal();
    }
  });

  return (
    <div className='project'>
      <dialog ref={dialogRef}>
        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
      <h1>{name}</h1>
      <div className="technology-icons">
        {technologies.map((technology) => (
          <TechnologyIcon key={technology} technology={technology} />
        ))}
      </div>
      {img && <img src={img} alt={name} />}
      <div className='options'>
        <button className="info-button" onClick={openModal}>More Info</button>
        <a href={link}><button className="visit-button">Visit Site</button></a>
      </div>
    </div>
  )
}

export default Project;