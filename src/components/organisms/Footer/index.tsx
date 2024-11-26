import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ConfirmButton} from '../../molecules';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const Footer: React.FC = () => {
  const disabled = useSelector<RootState, boolean>(
    state => state.buttonDisabled.disabled,
  );

  return (
    <View style={styles.container}>
      <ConfirmButton disabled={disabled} onPress={() => {}} />
    </View>
  );
};

export default memo(Footer);
