
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center"
    >
      <div className="container">

        <p className="text-info fw-bold">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="display-3 fw-bold text-white">
          Hi, I'm <span className="text-info">Ezhumalai M.</span>
        </h1>

        <h2 className="text-white mb-3">
          Full Stack Developer
        </h2>

        <p className="text-secondary fs-5">
          I create responsive websites and web applications
          using modern technologies.
        </p>

        <a href="#projects" className="btn btn-info me-3">
          My Projects
        </a>

        <a href="#contact" className="btn btn-outline-light">
          Contact Me
        </a>

      </div>
    </section>
  );
}

export default Home;
