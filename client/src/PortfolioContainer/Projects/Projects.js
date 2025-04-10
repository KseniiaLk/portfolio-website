/* eslint-disable no-unused-vars */
import React from "react";
import ProjectItem from "./ProjectItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import Dashboard from "../img/Projects/Dashboard.png";
import EWallet from "../img/Projects/EWallet.png";
import IngeBra from "../img/Projects/IngeBra.png";
import WealthSpecialists from "../img/Projects/WealthSpecialists.png";
import BattlePass from "../img/Projects/BattlePass.png";
import Nilo from "../img/Projects/Nilo.png";
import shape from "../img/Projects/shape-bg.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Here you can see my projects"}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={BattlePass} alt=""></img>
                    <h5>BattlePass</h5>
                  </div>
                  </div>
                  <div className="col-lg-12">
                  <div className="project-info">
                    <img src={Nilo} alt=""></img>
                    <h5>Nilo</h5>
                  </div>
                  </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={EWallet} alt=""></img>
                    <h5>E-wallet</h5>
                </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={IngeBra} alt=""></img>
                    <h5>Inge Bra Bygg</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={Dashboard} alt=""></img>
                    <h5>Dashboard</h5>
                  </div>
                </div>
              <div className="col-lg-12">
                  <div className="project-info">
                    <img src={WealthSpecialists} alt=""></img>
                    <h5>WealthSpecialists</h5>
                  </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="" />
      </div>
      <div>
            <ProjectItem
              imageSrc={BattlePass}
              title="BattlePass"
              description="The Battle Pass page for the Stryda website, which will be unveiled to the public soon. React,TypeScript,Tailwind CSS."
              liveLink="https://play.stryda.gg/home"
            />
             <ProjectItem
              imageSrc={Nilo}
              title="Nilo"
              description="At Nilo Collab, I have been engaged in ongoing JavaScript (React) development. "
              liveLink="https://www.nilocollab.com/"
            />
            <ProjectItem
              imageSrc={IngeBra}
              title="Inge Bra Bygg"
              description="Backend REST API for a case management system for a building company written in Node.js, Express."
              githubLink="https://github.com/KseniiaLk/Inge_Bra_Bygg"
            />
            <ProjectItem
              imageSrc={Dashboard}
              title="Dashboard"
              description="ITHS Dashboard is a Progressive Web App (PWA) built in React, TypeScript."
              githubLink="https://github.com/KseniiaLk/cpu-dashbord"
              liveLink="https://iths-db.netlify.app/"
            />
              <ProjectItem
              imageSrc={EWallet}
              title="E-wallet"
              description="The E-wallet App is a single page application, built in Vue.js and has different views."
              githubLink="https://github.com/KseniiaLk/e-wallet"
              liveLink="https://e-wallet-try.netlify.app/"
            />
            <ProjectItem
              imageSrc={WealthSpecialists}
              title="WealthSpecialists"
              description="We developed a C# backend banking system with user authentication, account and transaction management (including currency exchange, savings, and loans), admin-controlled user creation, security features like login lockout, and a user-friendly interface with delayed transaction processing for better control."
              githubLink="https://github.com/KseniiaLk/WealthSpecialists"
             />
      </div>
    </div>

  );
}