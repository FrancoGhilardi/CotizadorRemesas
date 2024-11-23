import React, {memo} from 'react';
import {HeaderText} from '../components/molecules';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles/HomeScreenStyles';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderText />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
