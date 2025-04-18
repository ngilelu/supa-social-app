import * as React from "react";
import Svg, { Path, Rect } from 'react-native-svg';

const PlusSquare = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
  
    <Path
      d="M12 8v8M8 12h8"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="square"
    />
  </Svg>
);

export default PlusSquare;
