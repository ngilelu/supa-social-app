import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

const User = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Circle
      cx="12"
      cy="8"
      r="4"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
    <Path
      d="M4 20c0-4 4-6 8-6s8 2 8 6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export default User;
