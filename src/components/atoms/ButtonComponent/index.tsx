import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

const ButtonComponent: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>CONFIRMAR OPERACIÓN</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);
