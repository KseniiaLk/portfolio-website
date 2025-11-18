import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TOTAL_SCREENS } from "../../../utilities/commonUtils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const screenToRoute = {
  "Home": "/",
  "AboutMe": "/about",
  "Resume": "/resume",
  "Projects": "/projects",
  "Contact": "/contact"
};

export default function Header() {
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const location = useLocation();

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => {
      const route = screenToRoute[Screen.screen_name] || "/";
      const isActive = location.pathname === route;
      
      return (
        <Link
          key={Screen.screen_name}
          to={route}
          className={getHeaderOptionsClasses(i, isActive)}
          onClick={() => setShowHeaderOptions(false)}
        >
          <span>{Screen.screen_name}</span>
        </Link>
      );
    });
  };

  const getHeaderOptionsClasses = (index, isActive) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (isActive) classes += "selected-header-option ";

    return classes;
  };

  return (
    <div className="header-container">
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
          onClick={(e) => {
            if (e.target.tagName === 'SPAN' || e.target.tagName === 'A') {
              setShowHeaderOptions(false);
            }
          }}
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
