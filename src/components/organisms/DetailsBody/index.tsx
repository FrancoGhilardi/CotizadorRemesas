import React, {memo, useMemo} from 'react';
import {View} from 'react-native';
import {DetailsComponent} from '../../molecules';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {CurrencySliceProps} from '../../../types';

const DetailsBody: React.FC = () => {
  const {payment, send} = useSelector<RootState, CurrencySliceProps>(
    state => state.currency,
  );

  const shippingCommissions = useMemo(() => {
    const currency = Number(payment);
    return currency <= 100 ? '3 USD' : (currency * 0.03).toFixed(2);
  }, [payment]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <DetailsComponent
          label="Monto a enviar en USD"
          currency={`$${payment}`}
        />
        <DetailsComponent
          label="Comisión de envío en USD"
          currency={`$${shippingCommissions}`}
        />
        <DetailsComponent
          label="Monto a recibir en VES"
          currency={`$${send}`}
        />
      </View>
    </View>
  );
};

export default memo(DetailsBody);
