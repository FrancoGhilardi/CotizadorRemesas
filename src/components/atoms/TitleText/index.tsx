import React, {memo} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import {AtomsText} from '../../../types';

const TitleText: React.FC<AtomsText> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(TitleText);
