import React, { Component } from "react";

class Showcase extends Component {
  render() {
    const { devs } = this.props;

    return (
      <div>
        <div className="showcaseContainer">
          {devs.map((dev, index) => (
            <div key={index} className="showcaseItem">
              <img src={dev.imageUrl} alt={dev.name} className="showcaseImg" />
              <div className="showcaseDetails">
                <h2>{dev.name}</h2>
                <p>{dev.description}</p>
                <p>
                  <strong>Skills:</strong>
                  <span className="skills">
                    {dev.skills.split(", ").map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill">
                        {skill}
                        {skillIndex < dev.skills.split(", ").length - 1 && ", "}
                      </span>
                    ))}
                  </span>
                </p>
                {/* Conditionally renders a link separately if the URL exists */}
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
          ))}
        </div>
      </div>
    );
  }
}

export default Showcase;
