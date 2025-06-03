import React, { Component } from "react";
import About from "../about/aboutMe";
import Career from "../about/career";
import Education from "../about/education";

class aboutNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubComponent: "about", // Handles internal component switching
    };
  }

  setSelectedSubComponent = (component) => {
    this.setState({ selectedSubComponent: component });
  };

  renderSubComponent() {
    const { selectedSubComponent } = this.state;
    switch (selectedSubComponent) {
      case "about":
        return <About />;
      case "career":
        return <Career />;
      case "education":
        return <Education />;
      default:
        return <div>Select a project section</div>;
    }
  }

  render() {
    return (
      <div className="header">
        <div className="navContainer">
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("about")}
          >
            About
          </button>
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("career")}
          >
            Career
          </button>
          <button
            className="navButton"
            onClick={() => this.setSelectedSubComponent("education")}
          >
            Education
          </button>
          <hr />
        </div>
        {/* Render the selected sub-component */}
        <div>{this.renderSubComponent()}</div>
      </div>
    );
  }
}
export default aboutNav;
