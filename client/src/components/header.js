import React, { Component } from "react";

class Header extends Component {
  render() {
    const { setSelectedComponent } = this.props;

    return (
      <div className="header">
        <h1>Ricky Syme's E-Portfolio</h1>
        <div className="navContainer">
          <div className="mainNav">
            <button
              className="nav"
              onClick={() => setSelectedComponent("contact")}
            >
              Contact
            </button>
            <button
              className="nav"
              onClick={() => setSelectedComponent("about")}
            >
              About
            </button>
            <button
              className="nav"
              onClick={() => setSelectedComponent("projects")}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
