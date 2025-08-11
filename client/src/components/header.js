import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { setSelectedIndex } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <header className="header">
        <div className="menuRow">
          <h1 className="siteTitle">Ricky Syme's E-Portfolio</h1>
          <button className="hamburger" onClick={this.toggleMenu}>☰</button>
          <div className={`navContainer ${isMenuOpen ? "open" : ""}`}>
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