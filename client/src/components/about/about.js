import React, { Component } from "react";

class AboutSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHovered: false,
    };
    this.slideInterval = null;

    this.slides = [
      {
        title: "About Me",
        content: `I'm a passionate individual with a Bachelor of Applied Information
          graduated at the end of 2023. My place I call home is in Tauranga in
          the mighty Bay Of Plenty. My free time is spent either in the digital
          realm or in nature camping, fishing, and the like. This gives me a
          good look at how things work which is how I found digital technology,
          which is the place id like to work and having finished my degree im
          ready to get into it.`,
      },
      {
        title: "Career",
        content: `My journey mainly reflects physical labor experience, but ive always
          wanted to work in the tech industry as I found a love for the logical
          way things work. So I hope to bring the soft skills I gathered in my
          years of physical labour work into the digital world. All this leading
          me to be ready to jump into any work in the industry putting the
          skills I learned in school and the personal learning ive done into
          practice.`,
      },
      {
        title: "Education",
        content: `In my pursuit of knowledge, I graduated with a Bachelor of Applied
          Information in mid November 2023. My bachelor gave me a wide range of
          knowledge in the various areas such as .NET MAUI development, MERN Web
          development, game development through Unity and Unreal using C# and a
          little C++, and some other experiences. These skills combined with my
          personal ventures in the development world like working with python,
          wordpress software, and some other software it gives me wide selection of
          adaptable skills. Which can help me to learn any required skills I
          need to complete the task a hand.`,
      },
    ];
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
    }, 5000); // 5s between slides
  };

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.slides.length,
    }));
  };

  goToPreviousSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.slides.length) % this.slides.length,
    }));
  };

  handleMouseEnter = () => this.setState({ isHovered: true });
  handleMouseLeave = () => this.setState({ isHovered: false });

  render() {
    const { currentIndex } = this.state;
    const { title, content } = this.slides[currentIndex];

    return (
      <div
        className="aboutSlideshowContainer"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {/* Left Button */}
        <button className="navButton left" onClick={this.goToPreviousSlide}>
          ❮
        </button>
        <div className="slide fadeIn">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        {/* Right Button */}
        <button
          className="navButton right"
          onClick={this.goToNextSlide}
        ></button>
      </div>
    );
  }
}

export default AboutSlideshow;
