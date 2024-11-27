import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {Label} from '../../atoms';
import {styles} from './styles';
import {DetailsComponentProps} from '../../../types';

const DetailsComponent: React.FC<DetailsComponentProps> = ({
  currency,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Label text={label} />
      <Text style={styles.text}>{currency}</Text>
    </View>
  );
};

export default memo(DetailsComponent);
