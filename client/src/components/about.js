import React from "react";

export default function AboutCards() {
  const sections = [
    {
      title: "About Me",
      content:
        "Junior software developer based in Tauranga, NZ (BAppIT, 2023). I’m hands-on with React/Next.js, Node/Express, and databases (MongoDB & PostgreSQL), with recent work using TypeScript, Docker, and JWT auth. I like clear problems, tidy code, and shipping small improvements quickly. I’m looking for a junior role where I can contribute immediately while learning from a strong team.",
    },
    {
      title: "Career",
      content:
        "I’m moving from practical, team-focused work into software. That background gave me reliability, communication, and a bias for action. Recent projects include: a Twitter-style app (Express + JWT + MongoDB + Firebase for images), a Next.js notes app with PostgreSQL, and a themed UWP/MAUI-style desktop app. I enjoy owning tasks end-to-end and collaborating to get features over the line.",
    },
    {
      title: "Education",
      content:
        "Bachelor of Applied Information Technology (Nov 2023). Covered full-stack web (React, Node), .NET MAUI foundations, databases (MongoDB, PostgreSQL), and C#/Unity basics. I keep learning with Python scripting and modern frontend patterns. Strong interest in TypeScript, testing, and clean component architecture.",
    },
    // Optional 4th card:
    // {
    //   title: "What I’m Looking For",
    //   content:
    //     "Junior/Graduate Software Developer—frontend or full-stack. Open to Tauranga/Auckland or remote NZ. I value code reviews, clear tickets, and a culture that ships.",
    // },
  ];

  return (
    <div className="panel-inner about-inner">
      <div className="aboutGridContainer">
        <div className="aboutGrid">
          {sections.map((s, i) => (
            <section className="aboutCard" key={i} aria-labelledby={`sec-${i}`}>
              <h2 id={`sec-${i}`} className="aboutCard-title">
                {s.title}
              </h2>
              <p className="aboutCard-body">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}