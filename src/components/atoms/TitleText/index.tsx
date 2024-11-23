import React, {memo} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type TitleTextProps = {
  text: string;
};
const TitleText: React.FC<TitleTextProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default memo(TitleText);
