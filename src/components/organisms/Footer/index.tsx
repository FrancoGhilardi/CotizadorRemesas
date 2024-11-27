import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ConfirmButton} from '../../molecules';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';

const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const disabled = useSelector<RootState, boolean>(
    state => state.buttonDisabled.disabled,
  );

  const handleOnPress = useCallback(
    () => navigation.navigate('OperationDetailsScreen'),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ConfirmButton disabled={disabled} onPress={handleOnPress} />
    </View>
  );
};

export default memo(Footer);
