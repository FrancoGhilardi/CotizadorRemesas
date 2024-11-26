import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonComponentProps} from '../../../types';
import {buildStyles} from './style';

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  disabled = false,
  onPress,
}) => {
  const styles = buildStyles(disabled);
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.text}>CONFIRMAR OPERACIÓN</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonComponent);
