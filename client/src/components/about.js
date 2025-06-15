import React, { Component } from "react";
import "../styles/SiteAnimations.css";

class AboutSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isHovered: false,
      fade: true,
    };
    this.slideInterval = null;

    this.slides = [
      {
        title: "About Me",
        content: `I'm a passionate and curious individual who graduated with a Bachelor of Applied Information at the end of 2023. I’m based in Tauranga, nestled in the beautiful Bay of Plenty — a place that balances my love for both nature and technology. Whether I’m out fishing, camping, or exploring the outdoors, or diving into digital projects, I’ve always been drawn to understanding how things work. That curiosity naturally led me into the world of digital technology, where I found not just interest, but purpose. 
        My approach to life blends analytical thinking with hands-on experience, and I enjoy solving problems both in the physical and digital worlds. Now, having completed my studies, I’m eager to put my skills to use in the tech industry. I’m motivated by the ever-evolving nature of technology and driven to grow within it. I see this as not just a career, but a field where I can continuously explore, learn, and make meaningful contributions.`,
      },
      {
        title: "Career",
        content: `My career journey has largely been grounded in physical labor roles, where I developed strong soft skills such as communication, resilience, teamwork, and a strong work ethic. Despite the hands-on nature of that work, I always held a deep interest in technology, fascinated by how systems function logically and efficiently. Over time, this interest turned into a goal — to pivot into the tech industry and build a career where I could apply both my technical and interpersonal strengths. 
        Now that I’ve completed my formal education, I’m ready to take that leap. I bring with me not only the technical knowledge I’ve gained through my degree and personal learning, but also the discipline and problem-solving mindset honed through years of real-world work experience. I’m enthusiastic about contributing to a tech-focused environment, whether it's development, IT support, or problem-solving tasks. My ability to adapt, communicate effectively, and stay committed to continuous improvement means I’m well-prepared to step into any role and thrive.`,
      },
      {
        title: "Education",
        content: `I earned my Bachelor of Applied Information in November 2023, a degree that gave me a solid foundation across a wide range of technologies and development frameworks. Throughout my studies, I engaged in hands-on learning in areas like .NET MAUI development for cross-platform apps, full-stack web development using the MERN stack, and immersive game development using Unity and Unreal Engine — working primarily with C# and some C++. These projects challenged me to think critically, collaborate with others, and see a product through from concept to completion.
        In addition to the structured coursework, I’ve spent considerable time expanding my skills on my own. This includes exploring Python scripting, managing content through WordPress, and experimenting with different tools and platforms to broaden my technical toolkit. This combination of academic and self-directed learning has shaped me into an adaptable and self-motivated developer who isn’t afraid to take on new challenges. I’m confident in my ability to learn on the fly and apply my growing skill set to real-world tasks and professional projects.`,
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
    this.setState({ fade: false }, () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % this.slides.length,
          fade: true,
        }));
      }, 300);
    });
  };

  goToPreviousSlide = () => {
    this.setState({ fade: false }, () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          currentIndex:
            (prevState.currentIndex - 1 + this.slides.length) %
            this.slides.length,
          fade: true,
        }));
      }, 300);
    });
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
        <div className="slideshowRow">
          <div className={`slide ${this.state.fade ? "fadeIn" : "fadeOut"}`}>
            {/* Left Arrow (overlapping left side) */}
            <div
              className="navZone inside leftZone"
              onClick={this.goToPreviousSlide}
            >
              <span className="arrow">&#10094;</span>
            </div>

            {/* Slide Content */}
            <div className="slideContent">
              <h1>{title}</h1>
              <p>{content}</p>
            </div>

            {/* Right Arrow (overlapping right side) */}
            <div
              className="navZone inside rightZone"
              onClick={this.goToNextSlide}
            >
              <span className="arrow">&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSlideshow;
