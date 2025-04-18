import * as React from "react";
import Svg, { Path, Rect, Circle } from 'react-native-svg';

const ImageIcon = (props) => (
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
      d="M21 15l-5.586-5.586a2 2 0 00-2.828 0L3 19"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="8.5"
      cy="8.5"
      r="1.5"
      fill={props.color}
    />
  </Svg>
);

export default ImageIcon;
