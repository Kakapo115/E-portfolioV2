import React, { Component } from "react";

class Header extends Component {
  render() {
    const { setSelectedIndex } = this.props;

    return (
      <header className="header">
        <div className="menuRow">
          <h1 className="siteTitle">Ricky Syme's E-Portfolio</h1>
          <div className="navContainer">
            <div className="mainNav">
              <button className="nav" onClick={() => setSelectedIndex(0)}>Contact</button>
              <button className="nav" onClick={() => setSelectedIndex(1)}>About</button>
              <button className="nav" onClick={() => setSelectedIndex(2)}>Projects</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
