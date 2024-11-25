import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowDown: React.FC = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M25.2407 18.64L23.8207 17.2L17.0007 24.12V4H15.0007V24.12L8.18074 17.2L6.76074 18.64L16.0007 28L25.2407 18.64Z"
        fill="#FAFAFA"
      />
    </Svg>
  );
};

export default memo(ArrowDown);
