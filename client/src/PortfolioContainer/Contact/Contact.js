import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import InteractiveButton from "../../utilities/InteractiveButton/InteractiveButton";
import AnimatedGridPattern from "../../utilities/AnimatedGridPattern/AnimatedGridPattern";
import "./Contact.css";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    try {
      if (!screen || !props?.id || !screen.fadeInScreen || screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    } catch (error) {
      console.error('Error in Contact fadeInScreenHandler:', error);
    }
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  React.useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="contact-container screen-container fade-in"
      id={props.id || ""}
    >
      <ScreenHeading title={"Contact"} subHeading={"Get in touch with me"} />
      <main className="contact-main">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h3 className="contact-subtitle">
              Contact
            </h3>
            <p className="contact-title">
              Get in touch
            </p>
            <p className="contact-description">
              I'd love to hear from you! Please fill out the form below.
            </p>
          </div>
          <div className="contact-form-container">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className="contact-form-background"
            />
            <form
              onSubmit={(e) => e.preventDefault()}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Phone number
                </label>
                <div className="phone-input-wrapper">
                  <div className="country-select">
                    <select className="country-select-input" defaultValue="SE">
                      <option value="SE">SE</option>
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                      <option value="DE">DE</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    placeholder="+46 (0) 123 456 789"
                    required
                    className="phone-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Message
                </label>
                <textarea 
                  required 
                  className="form-textarea"
                  rows="6"
                />
              </div>
              <InteractiveButton 
                text="Submit" 
                type="submit"
                className="contact-submit-button"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
