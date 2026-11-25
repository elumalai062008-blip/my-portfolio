
import React from "react";

function About() {
  return (
    <section id="about" className="container py-5">

      <h2 className="text-center text-info fw-bold mb-4">
        About Me
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-9">

          <div className="card bg-dark text-light p-4 shadow">

            <h4 className="text-info mb-3">
              Full Stack Developer
            </h4>

            <p className="text-secondary fs-5">
              I am Ezhumalai M. I have completed B.Sc
              Computer Science and Full Stack Development
              training at HCL GUVI.
            </p>

            <p className="text-secondary fs-5">
              I have knowledge of HTML, CSS, Bootstrap,
              JavaScript, React, Python, Django,
              Node.js and MongoDB.
            </p>

            <p className="text-secondary fs-5 mb-0">
              My goal is to become a successful Full Stack
              Developer in a reputed IT company.
            </p>

          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
