import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <footer>
        <div className="iconContainer">
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
      </footer>
    );
  }
}
export default footer;
