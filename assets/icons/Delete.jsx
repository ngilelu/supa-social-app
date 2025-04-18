import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Delete = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      d="M3 6h18"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M8 6v-1a2 2 0 012-2h4a2 2 0 012 2v1"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M10 11v6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
    <Path
      d="M14 11v6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export default Delete;
