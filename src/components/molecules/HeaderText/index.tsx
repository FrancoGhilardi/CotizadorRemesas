import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {SubtitleText, TitleText} from '../../atoms';
import {ChangeMoneyTextProps} from '../../../types';

const HeaderText: React.FC<ChangeMoneyTextProps> = ({children}) => {
  return (
    <View style={styles.subcontainer}>
      <TitleText text="Cotizador De Remesas" />
      <SubtitleText text="Tasa de cambio fija" />
      {children}
    </View>
  );
};
export default memo(HeaderText);
