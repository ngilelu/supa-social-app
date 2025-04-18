import * as React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

const Search = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Circle
      cx="11"
      cy="11"
      r="7"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
    <Path
      d="M16.5 16.5L20 20"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
    />
  </Svg>
);

export default Search;
