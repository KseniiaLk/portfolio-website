import React from "react";
import "./InteractiveButton.css";

const InteractiveButton = React.forwardRef(({ 
  text = "Button", 
  className = "", 
  onClick,
  href,
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
