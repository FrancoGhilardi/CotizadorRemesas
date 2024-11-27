import React, {memo} from 'react';
import {StatusBar} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TemplateScreensProps} from '../../../types';
import {styles} from './styles';

const TemplateScreens: React.FC<TemplateScreensProps> = ({children}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.GrayscaleG07}
      />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

export default memo(TemplateScreens);
