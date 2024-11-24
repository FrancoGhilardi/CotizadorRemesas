import React, {memo} from 'react';
import {View} from 'react-native';
import {ButtonComponent} from '../../atoms';
import {styles} from './styles';

const ConfirmButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent />
    </View>
  );
};

export default memo(ConfirmButton);
