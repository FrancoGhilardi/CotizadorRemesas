import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ConfirmButton} from '../../molecules';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ConfirmButton />
    </View>
  );
};

export default memo(Footer);
