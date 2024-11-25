import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TextInputContainer} from '../../molecules';
import {ArrowDown} from '../../../assets';

const Body: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TextInputContainer
          label="Monto a enviar"
          placeholder="Ingrese monto"
          error="Este campo no puede estar vacío y debe ser un número positivo."
          isError={false}
          money="USD"
        />
        <ArrowDown />
        <TextInputContainer
          label="Monto a recibir"
          money="VES"
          placeholder="$"
          disabled={true}
        />
      </View>
    </View>
  );
};

export default memo(Body);
