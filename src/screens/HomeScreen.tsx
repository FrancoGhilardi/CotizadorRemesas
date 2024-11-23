import React, {memo} from 'react';
import {HeaderText} from '../components/molecules';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <HeaderText />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
