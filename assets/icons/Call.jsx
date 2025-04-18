import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Call = (props) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      d="M5.05 3C4.49 3 4 3.49 4 4.05c0 9.94 8.01 17.95 17.95 17.95.56 0 1.05-.49 1.05-1.05v-3.4c0-.56-.41-1.05-.96-1.15l-3.05-.57a1.11 1.11 0 0 0-1.09.32l-1.47 1.66a14.96 14.96 0 0 1-6.57-6.57l1.66-1.47c.3-.27.44-.69.32-1.09L8.6 4.91A1.12 1.12 0 0 0 7.45 4H5.05Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Call;
