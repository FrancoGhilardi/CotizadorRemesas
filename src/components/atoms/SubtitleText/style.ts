import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const buildStyles = (isBlue: boolean) =>
  StyleSheet.create({
    text: {
      color: isBlue ? Colors.PrimaryP09 : Colors.GrayscaleG01,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: RFValue(17),
      letterSpacing: 2,
    },
  });
