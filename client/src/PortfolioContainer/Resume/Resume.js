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
    { label: "Projects" },
    { label: "Interests" },
  ];
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Vue", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: "TypeScript", ratingPercentage: 50 },
    { skill: "C#", ratingPercentage: 80 },
    { skill: "Tailwind CSS", ratingPercentage: 70 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "SASS", ratingPercentage: 65 },
    { skill: "SQLITE", ratingPercentage: 80 },
    
  ];

  const projectsDetails = [
    {
      title: "The Battle Pass page ",
      duration: { fromDate: "May 2023", toDate: "June 2023" },
      description:
        "During my time at Stryda and my thesis work on the BattlePass page, I have deepened my knowledge in React and TypeScript, learning to use these tools to build advanced web applications.Tailwind CSS has been an indispensable part of my work. With the help of this framework, I have been able to create sleek and responsive user interfaces with ease.",
      subHeading: "Technologies Used: React JS, Typescript, Tailwind CSS.",
    },
    {
      title: "Nilo Collab ",
      duration: { fromDate: "August 2022", toDate: "October 2022" },
      description:
        "At Nilo Collab, I have been engaged in ongoing JavaScript (React) development. This work has been quite extensive, with a significant portion dedicated to designing in Figma and implementing the design by writing code in Visual Studio Code. Additionally, my tasks have involved making code changes to various components, applying style modifications, and implementing new features.",
      subHeading:
        "Technologies Used: Figma, React JS.",
    },
    {
      title: "RestAPICV ",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Built a comprehensive backend REST API using ASP.NET Core to manage CV data. The system features SQL Server database integration through Entity Framework, implementing full CRUD operations for retrieving, adding, updating, and removing information. This project demonstrates my backend development skills and database management expertise.",
      subHeading:
        "Technologies Used: ASP.NET Core, C#, SQL Server, Entity Framework, REST API.",
    },

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
        subHeading={"Bachelor's degree, International Relations and AffairsBachelor's degree, International Relations and Affairs"}
        fromDate={"2013"}
        toDate={"2017"}
      />
    </div>,

    <div className="resume-screen-container" key="work">
      <div className="experience-container">
        <ResumeHeading
          heading={"Stryda"}
          subHeading={"FRONTEND DEVELOPER INTERN"}
          fromDate={"2023-01-10"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          As a frontend developer intern at Stryda, I’m a vital part of a team that’s building a platform for the company’s business insight team. 
          Our development stack consists of React, TypeScript, Tailwind, and Figma. 
          We aim to design an intuitive user interface with a strong focus on usability and data visualisation that’ll help streamline the team’s workflow and reduce their manual workload. 
          </span>
          <br />
        </div>
      </div>
      <div className="resume-screen-container" key="work">
      <div className="experience-container">
        <ResumeHeading
          heading={"Nilo Collaborations"}
          subHeading={"FRONTEND DEVELOPER INTERN"}
          fromDate={"2022-08-02"}
          toDate={"2022-10-20"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          I have had the privilege of working on the design (in Figma) and development of the frontend part with React components for Nilo, a cutting-edge digital management consultant and facilitation tool.
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

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,


    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Dancing"
        description="Dance is not just a hobby but a true passion of mine, and I find immense joy and fulfillment in expressing myself through movement. Among the diverse dance styles that I love, jazz funk, contemporary, and hip-hop hold a special place in my heart."
      />
      <ResumeHeading
        heading="Photography"
        description="I have a passion for capturing moments through a lens—photography is more than a hobby for me; every now and then, I even take on gigs and step into the role of a photographer."
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