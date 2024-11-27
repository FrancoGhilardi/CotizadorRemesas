import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {ChevronLeft} from '../../../assets';
import {ButtonChevronLeftProps} from '../../../types';

const ButtonChevronLeft: React.FC<ButtonChevronLeftProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ChevronLeft />
    </TouchableOpacity>
  );
};

export default memo(ButtonChevronLeft);
