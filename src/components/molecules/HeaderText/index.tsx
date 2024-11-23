import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TitleText} from '../../atoms';

const HeaderText: React.FC = () => {
  return (
    <View style={styles.container}>
      <TitleText text="hoaosodmapsodmasp" />
    </View>
  );
};
export default memo(HeaderText);
