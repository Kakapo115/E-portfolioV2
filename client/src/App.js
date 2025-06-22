import "./styles/App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/project/projects";
import { useEffect, useState } from "react";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("about");
  const [prevScroll, setPrevScroll] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 60) {
        setIsHeaderHidden(true); // scrolling down
      } else {
        setIsHeaderHidden(false); // scrolling up
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <div className="App">
      <Header
        setSelectedComponent={setSelectedComponent}
        isHidden={isHeaderHidden}
      />
      <div>{renderComponent()}</div>
      <Footer />
    </div>
  );
}

export default App;
