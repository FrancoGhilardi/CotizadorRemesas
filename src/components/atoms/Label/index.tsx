import React, {memo} from 'react';
import {Text} from 'react-native';
import {LabelProps} from '../../../types';
import {buildStyles} from './styles';

const Label: React.FC<LabelProps> = ({text, isError = false}) => {
  const styles = buildStyles(isError);
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(Label);
