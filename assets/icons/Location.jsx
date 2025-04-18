import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

const Location = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    {/* Pin outline */}
    <Path
      d="M12 21s-6-5.14-6-10a6 6 0 1 1 12 0c0 4.86-6 10-6 10Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinejoin="round"
    />
    {/* Pin center dot */}
    <Circle
      cx="12"
      cy="11"
      r="2"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
  </Svg>
);

export default Location;
