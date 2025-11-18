import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import resumeData from "../../data/resumeData.json";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  const [resumeDetails, setResumeDetails] = useState([]);

  let fadeInScreenHandler = (screen) => {
    try {
      if (!screen || !props?.id || !screen.fadeInScreen || screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    } catch (error) {
      console.error('Error in Resume fadeInScreenHandler:', error);
    }
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Education" },
    { label: "Work" },
    { label: "Programming Skills" },
    { label: "Interests" },
  ];

  useEffect(() => {
    const generateResumeDetails = () => {
      const details = [
        // Education section
        <div className="resume-screen-container" key="education">
          {resumeData.education.map((edu, index) => (
            <ResumeHeading
              key={index}
              heading={edu.heading}
              subHeading={edu.subHeading}
              fromDate={edu.fromDate}
              toDate={edu.toDate}
            />
          ))}
        </div>,

        // Work section
        <div className="resume-screen-container" key="work">
          {resumeData.work.map((job, index) => (
            <div className="experience-container" key={index}>
              <ResumeHeading
                heading={job.heading}
                subHeading={job.subHeading}
                fromDate={job.fromDate}
                toDate={job.toDate}
              />
              {job.description && (
                <div className="experience-description">
                  <span className="resume-description-text">
                    {job.description}
                  </span>
                  <br />
                </div>
              )}
            </div>
          ))}
        </div>,

        // Programming Skills section
        <div
          className="resume-screen-container programming-skills-container"
          key="programming"
        >
          {resumeData.programmingSkills.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,

        // Interests section
        <div className="resume-screen-container" key="interests">
          {resumeData.interests.map((interest, index) => (
            <ResumeHeading
              key={index}
              heading={interest.heading}
              description={interest.description}
            />
          ))}
        </div>,
      ];
      setResumeDetails(details);
    };

    generateResumeDetails();
  }, []);

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={""} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;