import * as React from "react";

const Loader = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "transparent",
      display: "block",
      shapeRendering: "auto",
      margin: 'auto',
      height: "calc(100vh - 107px)"
    }}
    viewBox="0 0 100 100"
  >
    <circle
      cx={50}
      cy={50}
      r={23}
      fill="none"
      stroke={color}
      strokeDasharray="108.38494654884786 38.12831551628262"
      strokeWidth={10}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);
export default Loader;
