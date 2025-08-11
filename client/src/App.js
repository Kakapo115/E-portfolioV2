import "./styles/App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/project/projects";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="App">
      <ParticlesBackground />
      <Header setSelectedIndex={setSelectedIndex} />
      <div className="panel-container">
        <div
          className="panel-slider"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          <div className="panel panel-contact">
            <Contact />
          </div>
          <div className="panel panel-about">
            <About />
          </div>
          <div className="panel panel-projects">
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
