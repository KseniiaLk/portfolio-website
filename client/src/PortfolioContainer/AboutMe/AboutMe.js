/* eslint-disable no-unused-vars */
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "As a junior Fullstack developer with several years of dedicated study and valuable internship experience at Nilo Collab and Stryda, I am excited to share my passion for learning, technology, and project participation. I am constantly seeking opportunities to enhance my skills and contribute to innovative projects.",
    highlights: {
      bullets: [
        "C# .NET",
        "Native JavaScript",
        "UX & UI design",
        "Javascript with framework (Vue.js)",
        "Agil development",
        "Backendprogramming and databases", 
        "Cross.platform-development (React)", 
        "Software life cycle management", 
        "Testning & TypeScript",
      ],
      heading: "Courses:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <a href="KseniiaLk.pdf" download="KseniiaLk.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
