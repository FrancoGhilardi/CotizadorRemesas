import React, {memo} from 'react';
import {View} from 'react-native';
import {ButtonComponent} from '../../atoms';
import {styles} from './styles';
import {ConfirmButtonProps} from '../../../types';

const ConfirmButton: React.FC<ConfirmButtonProps> = ({disabled, onPress}) => {
  return (
    <View style={styles.container}>
      <ButtonComponent disabled={disabled} onPress={onPress} />
    </View>
  );
};

export default memo(ConfirmButton);
