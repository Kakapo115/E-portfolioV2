import "./styles/App.css";
import Title from "./components/title";
import Contact from "./components/contact";
import About from "./components/navs/aboutNav";
import Projects from "./components/navs/projectNav";
import { useState } from "react";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("about");

  const getBackgroundImage = () => {
    switch (selectedComponent) {
      case "contact":
        return "url('/midjour_basecamp_topcut.png')"; // Example background for Contact
      case "about":
        return "url('/midjour_climbin.png')"; // Example background for About
      case "projects":
        return "url('/midjour_topvalley.png')"; // Example background for Projects
      default:
        return "url('/Wh46bS2Gw8vUC6iQh2wEd6-1200-80.png')"; // Default background
    }
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease",
      }}
    >
      <Title />
      <div className="navContainer">
        <div className="mainNav">
          <button
            className="navButton"
            onClick={() => setSelectedComponent("contact")}
          >
            Contact
          </button>
          <button
            className="navButton"
            onClick={() => setSelectedComponent("about")}
          >
            About
          </button>
          <button
            className="navButton"
            onClick={() => setSelectedComponent("projects")}
          >
            Projects
          </button>
          <hr />
        </div>
      </div>
      {/* Renders the selected component */}
      <div>{renderComponent()}</div>
      <div>
        <a href="https://github.com/Kakapo115">
          <img src="GitHub-Logo.png" className="icon git" alt="GitHub-Logo" />
        </a>
        <a href="https://www.linkedin.com/in/ricky-syme-b79701232/">
          <img
            src="linkdin-icon.png"
            className="icon linkdin"
            alt="LinkedIn-Icon"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
