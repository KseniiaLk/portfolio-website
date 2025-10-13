import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Home.css";

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    try {
      console.log('fadeInScreenHandler called with:', { screen, propsId: props?.id });
      if (!screen || !props?.id || !screen.fadeInScreen || screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    } catch (error) {
      console.error('Error in fadeInScreenHandler:', error);
    }
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  React.useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
    </div>
  );
}
