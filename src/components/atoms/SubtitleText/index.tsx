import React, {memo} from 'react';
import {Text} from 'react-native';
import {AtomsText} from '../../../types';
import {buildStyles} from './style';

const SubtitleText: React.FC<AtomsText> = ({text, isBlue = false}) => {
  const styles = buildStyles(isBlue);
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(SubtitleText);
