import React, {memo} from 'react';
import {View} from 'react-native';
import {Money} from '../../../constants/TypesMoney';
import {ChangeMoneyText} from '../../atoms';
import {styles} from './style';

const ChangeMoney: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChangeMoneyText text={`${Money.USD} = ${Money.VES}`} />
    </View>
  );
};
export default memo(ChangeMoney);
