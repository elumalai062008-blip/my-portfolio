
import React from "react";

function Education() {
  return (
    <section id="education" className="container py-5">
      <h2 className="text-center text-info fw-bold mb-5">
        Education
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-dark text-light p-4 shadow">
            <h4 className="text-info">B.Sc Computer Science</h4>
            <p className="text-secondary mb-2">
              Government Arts and Science College, Pappireddipatti
            </p>
            <p className="text-secondary mb-0">
               Currently Pursuing - 2nd Year
            </p>

            <hr className="border-secondary" />

            <h4 className="text-info">Full Stack Development</h4>
            <p className="text-secondary mb-0">
              HCL GUVI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
