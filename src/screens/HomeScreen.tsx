import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles/HomeScreenStyles';
import {StatusBar} from 'react-native';
import {Colors} from '../constants/Colors';
import {Body, Footer, Header} from '../components/organisms';

const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.GrayscaleG10}
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </SafeAreaView>
    </>
  );
};

export default memo(HomeScreen);
