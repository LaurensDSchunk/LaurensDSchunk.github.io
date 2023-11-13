import { useState } from "react";
import "./App.scss";

import Hero from "./components/hero";
import Technologoies from "./components/technologies";
import Footer from "./components/footer";
import Projects from "./components/projects";
import './assetImports.js'


function App() {
  const [count, setCount] = useState(0);
  const currentUrl = window.location.href; console.log(currentUrl);
  return (
    <>
      <Hero />
      <Technologoies />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
