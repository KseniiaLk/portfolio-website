import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

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
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "Vue.js", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 80 },
    { skill: "Node.js", ratingPercentage: 75 },
    { skill: "Express.js", ratingPercentage: 70 },
    { skill: "Tailwind CSS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "SASS/SCSS", ratingPercentage: 70 },
    { skill: "MongoDB", ratingPercentage: 60 },
    { skill: "SQLite", ratingPercentage: 80 },
  ];


  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"ChasAcademy"}
        subHeading={".Net Developer"}
        fromDate={"2024"}
        toDate={"2026"}
      />
       <ResumeHeading
        heading={"IT-Högskolan"}
        subHeading={"JavaScript Developer"}
        fromDate={"2021"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"St. Petersburg State University of Telecommunications"}
        subHeading={"Bachelor's Degree in International Relations and Affairs"}
        fromDate={"2013"}
        toDate={"2017"}
      />
    </div>,

    <div className="resume-screen-container" key="work">
      <div className="experience-container">
        <ResumeHeading
          heading={"Stryda"}
          subHeading={"FRONTEND DEVELOPER"}
          fromDate={"2023-01-01"}
          toDate={"2023-07-31"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          As a frontend developer at Stryda, I was a vital part of a team that's building a platform for the company's business insight team. 
          Our development stack consisted of React, TypeScript, Tailwind, and Figma. 
          We aimed to design an intuitive user interface with a strong focus on usability and data visualisation that helped streamline the team's workflow and reduce their manual workload. 
          We were committed to producing high-quality code, so I was responsible for writing efficient and scalable code, as well as conducting PR reviews on my colleagues' code. 
          </span>
          <br />
        </div>
      </div>
      <div className="resume-screen-container" key="work">
      <div className="experience-container">
        <ResumeHeading
          heading={"Nilo Collaborations"}
          subHeading={"FRONTEND DEVELOPER"}
          fromDate={"2022-08-01"}
          toDate={"2022-12-31"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          At Nilo Collab, I have been engaged in ongoing JavaScript (React) development. This work has been quite extensive, with a significant portion dedicated to designing in Figma and implementing the design by writing code in Visual Studio Code.
          </span>
          <br />
        </div>
      </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming"
    >
      {programmingSkillsDetails.map((skill, index) => (
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



    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Dance & Movement"
        description="Passionate dancer specializing in jazz funk, contemporary, and hip-hop styles. Dance serves as both creative expression and physical wellness, bringing balance and inspiration to my professional life. I believe movement and creativity enhance problem-solving and innovation in development work."
      />
      <ResumeHeading
        heading="Photography & Visual Arts"
        description="I love capturing moments through my lens — photography isn't just a hobby, it's another way I tell stories. Every now and then, I step behind the camera for gigs and bring ideas to life through photos."
      />
    </div>,
  ];

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