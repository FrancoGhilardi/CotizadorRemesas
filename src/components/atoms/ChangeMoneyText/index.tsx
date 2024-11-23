import React, {memo} from 'react';
import {Text} from 'react-native';
import {AtomsText} from '../../../types';
import {styles} from './style';

const ChangeMoneyText: React.FC<AtomsText> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(ChangeMoneyText);
