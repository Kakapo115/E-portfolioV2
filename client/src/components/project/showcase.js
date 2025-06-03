import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHovered: false,
    };
    this.slideInterval = null;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  startAutoSlide = () => {
    this.slideInterval = setInterval(() => {
      if (!this.state.isHovered) {
        this.goToNextSlide();
      }
    }, 4000); // Slide every 4 seconds
  };

  goToNextSlide = () => {
    const { devs } = this.props;
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % devs.length,
    }));
  };

  goToPreviousSlide = () => {
    const { devs } = this.props;
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + devs.length) % devs.length,
    }));
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { devs } = this.props;
    const { currentIndex } = this.state;
    const dev = devs[currentIndex];

    return (
      <div
        className="slideshowContainer"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide fadeIn">
          <img src={dev.imageUrl} alt={dev.name} className="slideImage" />
          <div className="slideDetails">
            <h2>{dev.name}</h2>
            <p>{dev.description}</p>
            <p>
              <strong>Skills:</strong>{" "}
              {dev.skills.split(", ").map((skill, i) => (
                <span key={i} className="skill">
                  {skill}
                  {i < dev.skills.split(", ").length - 1 && ", "}
                </span>
              ))}
            </p>
            {dev.url && (
              <a
                href={dev.url}
                target="_blank"
                rel="noopener noreferrer"
                className="projLink"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
