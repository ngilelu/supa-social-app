import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Back = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      d="M15 18l-6-6 6-6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Back;
