import "./styles/App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact";
import About from "./components/about/about";
import Projects from "./components/project/projects";
import { useState } from "react";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("about");

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
    <div className="App">
      <Header setSelectedComponent={setSelectedComponent} />
      <div>{renderComponent()}</div>
      <Footer />
    </div>
  );
}

export default App;
