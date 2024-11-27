import React, {memo} from 'react';
import {ButtonChevronLeft} from '../../atoms';
import {View} from 'react-native';
import {styles} from './styles';
import {ButtonChevronLeftContainerProps} from '../../../types';

const ButtonChevronLeftContainer: React.FC<ButtonChevronLeftContainerProps> = ({
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <ButtonChevronLeft onPress={onPress} />
    </View>
  );
};

export default memo(ButtonChevronLeftContainer);
