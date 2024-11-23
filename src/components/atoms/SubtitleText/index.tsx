import React, {memo} from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import {AtomsText} from '../../../types';

const SubtitleText: React.FC<AtomsText> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(SubtitleText);
