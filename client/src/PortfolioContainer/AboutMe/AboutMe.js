/* eslint-disable no-unused-vars */
import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import WavesBackground from "../../utilities/WavesBackground/WavesBackground";
import InteractiveButton from "../../utilities/InteractiveButton/InteractiveButton";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    try {
      if (!screen || !props?.id || !screen.fadeInScreen || screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    } catch (error) {
      console.error('Error in AboutMe fadeInScreenHandler:', error);
    }
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  React.useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm a Fullstack Developer with a strong interest in technology, problem-solving, and creating meaningful digital products. I work with both frontend and backend development using .NET, Node.js, and SQL, and I also have experience in technical support and troubleshooting. I enjoy building user-friendly applications, improving system performance, and finding practical solutions to complex issues.",
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
      <WavesBackground
        lineColor="rgba(255, 88, 35, 0.2)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
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
              <InteractiveButton 
                text="Get CV" 
                href="KseniiaLk.pdf" 
                target="_blank"
                className="about-me-cv-button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
