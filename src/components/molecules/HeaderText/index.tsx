import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {SubtitleText, TitleText} from '../../atoms';
import {Money} from '../../../constants/TypesMoney';
import ChangeMoneyText from '../../atoms/ChangeMoneyText';

const HeaderText: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TitleText text="Cotizador De Remesas" />
        <SubtitleText text="Tipo de cambio" />
        <ChangeMoneyText text={`${Money.USD} = ${Money.VES}`} />
      </View>
    </View>
  );
};
export default memo(HeaderText);
