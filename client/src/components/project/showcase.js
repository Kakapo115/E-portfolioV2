import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHovered: false,
      fade: true,
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
    }, 4000);
  };

  goToNextSlide = () => {
    const { devs } = this.props;
    this.setState({ fade: false }, () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % devs.length,
          fade: true,
        }));
      }, 300); // match CSS fade-out duration
    });
  };

  goToPreviousSlide = () => {
    const { devs } = this.props;
    this.setState({ fade: false }, () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex:
            (prevState.currentIndex - 1 + devs.length) % devs.length,
          fade: true,
        }));
      }, 300);
    });
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { devs } = this.props;
    const { currentIndex, fade } = this.state;

    if (!devs || devs.length === 0) {
      return <div className="slideshowContainer">Loading projects...</div>;
    }

    const dev = devs[currentIndex];

    const typeMap = {
      webdev: "Web Development",
      appdev: "App Development",
      gamedev: "Game Development",
    };

    return (
      <div
        className="project-slideshowContainer"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h1 style={{ color: "#E0AAFF", paddingBottom: "1rem" }}>
          All Projects
        </h1>
        <div className="project-slideshowRow">
          <div className={`project-slide ${fade ? "fadeIn" : "fadeOut"}`}>
            <div
              className="project-navZone inside leftZone"
              onClick={this.goToPreviousSlide}
            >
              <span className="project-arrow">&#10094;</span>
            </div>

            <div className="project-slideContent">
              <div className="project-slideText">
                <h2>{dev.name}</h2>
                <p>{typeMap[dev.type] || dev.type}</p>
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

              <div className="project-slideImageContainer">
                <img
                  src={dev.imageUrl}
                  alt={dev.name}
                  className="project-slideImage"
                />
              </div>
            </div>

            <div
              className="project-navZone inside rightZone"
              onClick={this.goToNextSlide}
            >
              <span className="project-arrow">&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
