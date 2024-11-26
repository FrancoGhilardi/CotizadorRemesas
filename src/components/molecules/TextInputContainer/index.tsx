import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Label, TextInputComponent} from '../../atoms';
import {TextInputContainerProps} from '../../../types';

const TextInputContainer: React.FC<TextInputContainerProps> = ({
  money,
  label,
  placeholder = '',
  error = '',
  disabled = false,
  isError = false,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Label text={label} />
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          disabled={disabled}
        />
        <Label text={money} />
      </View>
      {isError && <Label text={error} isError={isError} />}
    </View>
  );
};

export default memo(TextInputContainer);
