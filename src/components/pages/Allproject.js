import React from "react";

const Allproject = ({ project }) => {
  return (
    <div>
      <div className="grid-2 my-2">
        <div className="project-img">
          <img src={project.image} alt="" />
        </div>
        <div className="project-txt">
          <h3 className="text-right">{project.name}</h3>
          <p className="pro-txt">{project.descp}</p>
          <a href={project.code}>
            <i className="fab fa-github"></i> Github
          </a>
          <a href={project.link}>
            <i className="fas fa-link"></i> Demo
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Allproject;
