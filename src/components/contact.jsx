import React from "react";

function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center text-info fw-bold mb-5">
        Contact Me
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-dark text-light p-4 shadow text-center">
            <h4 className="text-info mb-3">
              Let's Connect!
            </h4>

            <p className="text-secondary">
              I am looking for Full Stack Developer internship opportunities.
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:elumalai062008@gmail.com"
                className="text-info text-decoration-none"
              >
                elumalai062008@gmail.com
              </a>
            </p>

            <a
              href="https://github.com/elumalai062008-blip"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-info"
            >
              Visit My GitHub
            </a>
            <a
              href="https://lnkd.in/p/gKbSW-pd"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary mt-3"
            >
              Visit My LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;