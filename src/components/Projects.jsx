function Projects() {
  const projects = [
    {
      title: "Social Media App",
      description:
        "A social media application with login, signup, user profiles, followers, chat and two-factor authentication.",
      technologies: "React, Node.js, Express.js, MongoDB",
      github: "https://github.com/elumalai062008-blip",
      demo: "#",
    },
    {
      title: "E-Commerce App",
      description:
        "An online shopping application where users can explore products and manage their shopping experience.",
      technologies: "HTML, CSS, JavaScript, React, Python, Django, SQLite",
      github: "https://github.com/elumalai062008-blip",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center text-info fw-bold mb-5">
        My Projects
      </h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card bg-dark text-white p-4 h-100 shadow">
              <h3 className="text-info">
                {project.title}
              </h3>

              <p>{project.description}</p>

              <p>
                <strong>Technologies:</strong>{" "}
                {project.technologies}
              </p>

              <div className="d-flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="btn btn-outline-light"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;