import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TextInputContainer} from '../../molecules';
import {ArrowDown} from '../../../assets';
import {currencyConverter} from '../../../services/hooks';
import {useDispatch} from 'react-redux';
import {setButtonDisabled} from '../../../redux/Slice/buttonDisabledSlice';
import {updateCurrency} from '../../../redux/Slice/currencySlice';

const Body: React.FC = () => {
  const [payment, setPayment] = useState<string>('');
  const [amountSend, setAmountSend] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onChange = useCallback((text: string): void => {
    const currency = currencyConverter(text);
    setError(!currency);
    setPayment(`$${text}`);
    setAmountSend(`$${currency || '0.00'}`);
    dispatch(setButtonDisabled(!currency));
    const data = {payment: text, send: currency};
    dispatch(updateCurrency(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInputContainer
          label="Monto a enviar"
          placeholder="Ingrese monto"
          error="Este campo no puede estar vacío, debe ser un número positivo y mayor a 3 USD."
          isError={error}
          money="USD"
          value={payment}
          onChangeText={onChange}
        />
        <ArrowDown />
        <TextInputContainer
          label="Monto a recibir"
          money="VES"
          placeholder="$"
          disabled={true}
          value={amountSend}
        />
      </View>
    </View>
  );
};

export default memo(Body);
