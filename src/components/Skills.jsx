
import React from "react";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "Node.js",
    "Express.js",
    "SQL",
    "MongoDB"
  ];

  return (
    <section id="skills" className="container py-5">

      <h2 className="text-center text-info fw-bold mb-5">
        My Skills
      </h2>

      <div className="row g-4">

        {skills.map((skill, index) => (

          <div className="col-6 col-md-4 col-lg-3" key={index}>

            <div className="card bg-dark text-light text-center p-4 shadow">

              <h5 className="mb-0">{skill}</h5>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;
