import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

const ChevronLeft: React.FC = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M22.5483 11L24 12.4263L15.9033 20.2812L23.9182 28.1362L22.4665 29.5625L13 20.2812L22.5483 11Z"
        fill="#212121"
      />
    </Svg>
  );
};

export default memo(ChevronLeft);
