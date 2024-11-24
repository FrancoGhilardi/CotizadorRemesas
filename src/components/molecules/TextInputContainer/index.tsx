import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Label, TextInputComponent} from '../../atoms';
import {TextInputContainerProps} from '../../../types';

const TextInputContainer: React.FC<TextInputContainerProps> = ({
  error = '',
  isError = false,
  label,
  money,
  placeholder = '',
}) => {
  return (
    <View style={styles.container}>
      <Label text={label} />
      <View style={styles.containerInput}>
        <TextInputComponent
          placeholder={placeholder}
          onChangeText={(text: string) => console.log(text)}
          value=""
        />
        <Label text={money} />
      </View>
      {isError && <Label text={error} isError={isError} />}
    </View>
  );
};

export default memo(TextInputContainer);
