import "./Hero.scss";
import scroll from "/src/assets/icons/scroll.svg"
function Hero() {
  return (
    <>
      <div className="hero">
        <h1>Laurens Schunk;</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <img className="scroll" src={scroll}></img>
    </>
  );
}

export default Hero;
