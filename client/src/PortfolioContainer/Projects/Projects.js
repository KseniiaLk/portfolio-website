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
import EWallet from "../img/Projects/EWallet.png";
import WealthSpecialists from "../img/Projects/WealthSpecialists.png";
import BattlePass from "../img/Projects/BattlePass.png";
import Nilo from "../img/Projects/Nilo.png";
import shape from "../img/Projects/shape-bg.png";
import RestAPICV from "../img/Projects/RestAPICV.png";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    try {
      if (!screen || !props?.id || !screen.fadeInScreen || screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    } catch (error) {
      console.error('Error in Projects fadeInScreenHandler:', error);
    }
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  React.useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

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
                    <img src={RestAPICV} alt=""></img>
                    <h5>RestAPICV</h5>
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
              imageSrc={RestAPICV}
              title="RestAPICV"
              description="Backend REST API built with ASP.NET Core to manage CV data. Features SQL Server database integration through Entity Framework with full CRUD operations for retrieving, adding, updating, and removing information."
              githubLink="https://github.com/KseniiaLk/RestAPICV"
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
              description="Developed a C# backend banking system featuring user authentication, account and transaction management (including currency exchange, savings, and loans), admin-controlled user creation, security measures such as login lockout, and a user-friendly interface with delayed transaction processing for improved control."
              githubLink="https://github.com/KseniiaLk/WealthSpecialists"
             />
      </div>
    </div>

  );
}