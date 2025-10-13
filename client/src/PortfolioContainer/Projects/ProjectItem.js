import React from "react";
import InteractiveButton from "../../utilities/InteractiveButton/InteractiveButton";
import './ProjectItem.css';

const ProjectItem = ({ imageSrc, title, description, githubLink,liveLink }) => {
  return (
    <div className="project-item">
      <div className="project-inner">
        <div className="project-content">
          <img className="project-image" src={imageSrc} alt="" />
          <h5 className="project-title">{title}</h5>
          <p className="project-description">{description}</p>
          <div className="project-links">
            {githubLink && (
              <InteractiveButton 
                text="Project" 
                href={githubLink} 
                target="_blank"
                className="project-interactive-button"
              />
            )}
            {liveLink && (
              <InteractiveButton 
                text="Live Demo" 
                href={liveLink} 
                target="_blank"
                className="project-interactive-button"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
