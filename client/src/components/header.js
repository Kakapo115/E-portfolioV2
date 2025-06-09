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
    const { setSelectedComponent } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div className="header">
        {/* Title and hamburger side-by-side */}
        <div className="menuRow">
          <h1 className="siteTitle">Ricky Syme's E-Portfolio</h1>
          <button className="hamburger" onClick={this.toggleMenu}>
            ☰
          </button>
        </div>

        {/* Menu appears *below* row on small screens */}
        <div className={`navContainer ${isMenuOpen ? "open" : ""}`}>
          <div className="mainNav">
            <button className="nav" onClick={() => setSelectedComponent("contact")}>
              Contact
            </button>
            <button className="nav" onClick={() => setSelectedComponent("about")}>
              About
            </button>
            <button className="nav" onClick={() => setSelectedComponent("projects")}>
              Projects
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;