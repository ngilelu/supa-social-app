import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

const Camera = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* Camera Body */}
    <Path
      d="M4 7h2l1.5-2h9L18 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinejoin="round"
    />
    {/* Lens */}
    <Circle
      cx="12"
      cy="13"
      r="3"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
  </Svg>
);

export default Camera;
