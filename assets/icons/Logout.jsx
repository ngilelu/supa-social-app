import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

const LogoutCircle = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* Outer circle */}
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
    {/* Arrow pointing right */}
    <Path
      d="M13 8l4 4-4 4"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Line to arrow */}
    <Path
      d="M9 12h8"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LogoutCircle;
