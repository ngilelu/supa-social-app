import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Password = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      d="M6 10V7a6 6 0 1112 0v3"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 10h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M12 15v2"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export default Password;
