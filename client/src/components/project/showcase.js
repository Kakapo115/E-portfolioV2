import React, { Component } from "react";

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHovered: false,
      fade: true,
      activeFilter: "all",
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
  const { activeFilter } = this.state;

  const filteredDevs =
    activeFilter === "all"
      ? devs
      : devs.filter((d) => d.type === activeFilter);

  this.setState({ fade: false }, () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % filteredDevs.length,
        fade: true,
      }));
    }, 300);
  });
};

goToPreviousSlide = () => {
  const { devs } = this.props;
  const { activeFilter } = this.state;

  const filteredDevs =
    activeFilter === "all"
      ? devs
      : devs.filter((d) => d.type === activeFilter);

  this.setState({ fade: false }, () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        currentIndex:
          (prevState.currentIndex - 1 + filteredDevs.length) %
          filteredDevs.length,
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
    const { currentIndex, fade, activeFilter } = this.state;
    const filteredDevs =
      activeFilter === "all"
        ? devs
        : devs.filter((d) => d.type === activeFilter);
    const dev = filteredDevs[currentIndex % filteredDevs.length];

    if (!filteredDevs || filteredDevs.length === 0) {
      return (
        <div className="project-slideshowContainer">No projects found.</div>
      );
    }
    
    const typeMap = {
      webDev: "Web Development",
      appDev: "App Development",
      gameDev: "Game Development",
    };

    return (
      <div
        className="project-slideshowContainer"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="project-filterBar">
          {["all", "webdev", "appdev", "gamedev"].map((type) => (
            <button
              key={type}
              className={`filterButton ${
                activeFilter === type ? "active" : ""
              }`}
              onClick={() =>
                this.setState({ activeFilter: type, currentIndex: 0 })
              }
            >
              {type === "all"
                ? "All"
                : type === "webdev"
                ? "Web"
                : type === "appdev"
                ? "App"
                : "Game"}
            </button>
          ))}
        </div>
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
