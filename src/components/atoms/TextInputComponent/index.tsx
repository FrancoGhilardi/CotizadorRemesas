import React, {memo} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';
import {TextInputConponentProps} from '../../../types';
import {Colors} from '../../../constants/Colors';

const TextInputComponent: React.FC<TextInputConponentProps> = ({
  placeholder,
  value,
  disabled = false,
  onChangeText,
}) => {
  const handleChangeText = (text: string) => {
    const filteredText = text.replace(/[^0-9]/g, '');
    onChangeText && onChangeText(filteredText);
  };
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={handleChangeText}
      style={styles.input}
      inputMode="numeric"
      keyboardType="numeric"
      autoComplete="off"
      maxLength={disabled ? 15 : 10}
      placeholderTextColor={Colors.GrayscaleG10}
      editable={!disabled}
    />
  );
};

export default memo(TextInputComponent);
