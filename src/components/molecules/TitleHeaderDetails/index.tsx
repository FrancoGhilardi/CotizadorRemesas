import React, {memo} from 'react';
import {View} from 'react-native';
import {SubtitleText} from '../../atoms';
import {styles} from './styles';

const TitleHeaderDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <SubtitleText text="DETALLE DEL ENVÍO" isBlue />
    </View>
  );
};

export default memo(TitleHeaderDetails);
