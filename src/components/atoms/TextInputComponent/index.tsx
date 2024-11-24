import React, {memo} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
import {TextInputConponentProps} from '../../../types';
import {Colors} from '../../../constants/Colors';

const TextInputComponent: React.FC<TextInputConponentProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      inputMode="numeric"
      autoComplete="off"
      maxLength={20}
      placeholderTextColor={Colors.GrayscaleG10}
    />
  );
};

export default memo(TextInputComponent);
