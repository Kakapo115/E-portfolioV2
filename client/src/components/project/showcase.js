import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Showcase = ({ devs }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 12000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  if (!devs || devs.length === 0) {
    return <div className="project-slideshowContainer">No projects found.</div>;
  }

  return (
    <div
      className="project-slideshowContainer"
      onMouseEnter={() => sliderRef.current?.slickPause()}
      onMouseLeave={() => sliderRef.current?.slickPlay()}
    >
      <Slider ref={sliderRef} {...settings}>
        {devs.map((card, idx) => (
          <div key={idx}>
            <div
              className="project-card"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="project-card-content">
                <h2 className="project-title">{card.name}</h2>
                <p className="project-description">{card.description}</p>
                <p className="project-skills">
                  <strong>Skills:</strong> {card.skills}
                </p>
                {card.url && (
                  <a
                    href={card.url}
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
        ))}
      </Slider>
    </div>
  );
};

export default Showcase;
