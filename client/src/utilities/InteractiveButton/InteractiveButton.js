import React from "react";
import { Link } from "react-router-dom";
import "./InteractiveButton.css";

const InteractiveButton = React.forwardRef(({ 
  text = "Button", 
  className = "", 
  onClick,
  href,
  to,
  target,
  ...props 
}, ref) => {
  const ButtonContent = () => (
    <button
      ref={ref}
      className={`interactive-button ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="interactive-button-glow" />
      <span className="interactive-button-text">
        {text}
      </span>
    </button>
  );
  if (to) {
    return (
      <Link 
        to={to}
        className={`interactive-button-link ${className}`}
        {...props}
      >
        <div className="interactive-button-glow" />
        <span className="interactive-button-text">
          {text}
        </span>
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        className={`interactive-button-link ${className}`}
        {...props}
      >
        <div className="interactive-button-glow" />
        <span className="interactive-button-text">
          {text}
        </span>
      </a>
    );
  }

  return <ButtonContent />;
});

InteractiveButton.displayName = "InteractiveButton";

export default InteractiveButton;
