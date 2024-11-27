import React, {memo, useCallback, useEffect} from 'react';
import {BackHandler, View} from 'react-native';
import {ButtonChevonLeftContainer} from '../../molecules';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../types';
import {useDispatch} from 'react-redux';
import {clearCurrency} from '../../../redux/Slice/currencySlice';
import {disabledButton} from '../../../redux/Slice/buttonDisabledSlice';

const DetailsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const habldeBackAction = useCallback(() => {
    dispatch(clearCurrency());
    dispatch(disabledButton());
    navigation.goBack();
  }, [navigation, dispatch]);

  const handleOnPress = useCallback(
    () => habldeBackAction(),
    [habldeBackAction],
  );

  useEffect(() => {
    const handleBackPress = () => {
      habldeBackAction();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [habldeBackAction]);

  return (
    <View style={styles.container}>
      <ButtonChevonLeftContainer onPress={handleOnPress} />
    </View>
  );
};

export default memo(DetailsHeader);
