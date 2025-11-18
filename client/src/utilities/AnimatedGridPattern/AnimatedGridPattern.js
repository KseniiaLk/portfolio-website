import React, { useEffect, useRef, useState, useCallback } from "react";
import "./AnimatedGridPattern.css";

const AnimatedGridPattern = ({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className = "",
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

 
  const generateSquares = useCallback((count) => {
    const getPos = () => [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }, [dimensions.width, dimensions.height, width, height]);

  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  const updateSquarePosition = (id) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: [
                Math.floor((Math.random() * dimensions.width) / width),
                Math.floor((Math.random() * dimensions.height) / height),
              ],
            }
          : sq,
      ),
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares, generateSquares]);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const currentContainer = containerRef.current;
    if (currentContainer) {
      resizeObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        resizeObserver.unobserve(currentContainer);
      }
    };
  }, []);

  const patternId = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      ref={containerRef}
      className={`animated-grid-container ${className}`}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="animated-grid-svg"
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          fill: 'rgba(107, 114, 128, 0.3)',
          stroke: 'rgba(107, 114, 128, 0.3)',
          pointerEvents: 'none'
        }}
      >
        <defs>
          <pattern
            id={patternId}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        <svg x={x} y={y} className="animated-squares-container">
          {squares.map(({ pos: [xPos, yPos], id }, index) => (
            <rect
              key={`${xPos}-${yPos}-${index}`}
              width={width - 1}
              height={height - 1}
              x={xPos * width + 1}
              y={yPos * height + 1}
              fill="currentColor"
              strokeWidth="0"
              className="animated-square"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${duration}s`,
                opacity: maxOpacity,
              }}
              onAnimationEnd={() => updateSquarePosition(id)}
            />
          ))}
        </svg>
      </svg>
    </div>
  );
};

export default AnimatedGridPattern;
