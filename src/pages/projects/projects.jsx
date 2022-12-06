import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-wrapper">
        <span className="title">Projects</span>
        <div className="projects-list">
          <div className="item">
            <img src="ac.png" alt="" />
            <div className="img-cover">
              <span>
                <a href="https://apniclass.vercel.app" target="_blank">
                  apniclass.vercel.app 🔗
                </a>
              </span>
            </div>
          </div>
          <div className="item">
            <img src="mm.png" alt="" />
            <div className="img-cover">
              <span>
                <a href="https://madhavmasaala.vercel.app" target="_blank">
                  madhavmasaala.verc... 🔗
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
