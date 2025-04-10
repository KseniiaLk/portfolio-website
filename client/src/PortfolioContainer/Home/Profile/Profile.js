import React from "react";
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
              <a href="https://instagram.com/kseny_lk?igshid=MTIyMzRjYmRlZg==">
                <i className=" fa fa-instagram"></i>
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
                I am a curious and enthusiastic junior Fullstack developer from
                Stockholm.
              </h3>
            </span>
          </div>

          <div className="profile-options">
            <a href="KseniiaLk.pdf" download="KseniiaLk.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
