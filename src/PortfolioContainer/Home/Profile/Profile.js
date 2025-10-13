import React from "react";
import InteractiveButton from "../../../utilities/InteractiveButton/InteractiveButton";
import "./Profile.css";


export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/kseniia-lukanina/">
                <i className=" fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/KseniiaLk">
                <i className=" fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, my name is{" "}
              <span className="highlighted-text">Kseniia Lukanina</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h3 className="profile-role-tagline">
                I’m a curious, creative, and enthusiastic Fullstack Developer from Stockholm who loves learning and building meaningful digital experience.
              </h3>
            </span>
          </div>

          <div className="profile-options">
            <InteractiveButton 
              text="Get CV" 
              href="KseniiaLk.pdf" 
              target="_blank"
              className="profile-cv-button"
            />
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
