// import React, {memo, useCallback, useState} from 'react';
// import {View} from 'react-native';
// import {styles} from './styles';
// import {TextInputContainer} from '../../molecules';
// import {ArrowDown} from '../../../assets';
// import {currencyConverter} from '../../../services/hooks';
// import {useDispatch, useSelector} from 'react-redux';
// import {setButtonDisabled} from '../../../redux/Slice/buttonDisabledSlice';
// import {updateCurrency} from '../../../redux/Slice/currencySlice';
// import {RootState} from '../../../redux/store';

// const Body: React.FC = () => {
//   const paymentSlice = useSelector<RootState, string>(
//     state => state.currency.payment,
//   );
//   const sendSlice = useSelector<RootState, string>(
//     state => state.currency.payment,
//   );
//   const [payment, setPayment] = useState<string>(paymentSlice);
//   const [amountSend, setAmountSend] = useState<string>(sendSlice);
//   const [error, setError] = useState<boolean>(false);
//   const dispatch = useDispatch();

//   const onChange = useCallback(
//     (text: string): void => {
//       const currency = currencyConverter(text);
//       setError(!currency);
//       setPayment(`$${text}`);
//       setAmountSend(`$${currency || '0.00'}`);
//       dispatch(setButtonDisabled(!currency));
//       const data = {payment: text, send: currency};
//       dispatch(updateCurrency(data));
//     },
//     [dispatch],
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.subcontainer}>
//         <TextInputContainer
//           label="Monto a enviar"
//           placeholder="Ingrese monto"
//           error="Este campo no puede estar vacío, debe ser un número positivo y mayor a 3 USD."
//           isError={error}
//           money="USD"
//           value={payment}
//           onChangeText={onChange}
//         />
//         <ArrowDown />
//         <TextInputContainer
//           label="Monto a recibir"
//           money="VES"
//           placeholder="$0.00"
//           disabled={true}
//           value={amountSend}
//         />
//       </View>
//     </View>
//   );
// };

// export default memo(Body);
import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TextInputContainer} from '../../molecules';
import {ArrowDown} from '../../../assets';
import {currencyConverter} from '../../../services/hooks';
import {useDispatch, useSelector} from 'react-redux';
import {setButtonDisabled} from '../../../redux/Slice/buttonDisabledSlice';
import {updateCurrency} from '../../../redux/Slice/currencySlice';
import {RootState} from '../../../redux/store';

const Body: React.FC = () => {
  const {payment: paymentSlice, send: sendSlice} = useSelector(
    (state: RootState) => state.currency,
  );
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const onChange = useCallback(
    (text: string): void => {
      const convertedCurrency = currencyConverter(text);
      const isError = !convertedCurrency;
      setError(isError);
      dispatch(setButtonDisabled(isError));
      dispatch(
        updateCurrency({payment: text, send: convertedCurrency || '0.00'}),
      );
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInputContainer
          label="Monto a enviar"
          placeholder="Ingrese monto"
          error="Este campo no puede estar vacío, debe ser un número positivo y mayor a 3 USD."
          isError={error}
          money="USD"
          value={paymentSlice ? `$${paymentSlice}` : ''}
          onChangeText={onChange}
        />
        <ArrowDown />
        <TextInputContainer
          label="Monto a recibir"
          money="VES"
          placeholder="$0.00"
          disabled={true}
          value={sendSlice ? `$${sendSlice}` : ''}
        />
      </View>
    </View>
  );
};

export default memo(Body);
