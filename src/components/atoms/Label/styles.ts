import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constants/Colors';

export const buildStyles = (isDanger: boolean) =>
  StyleSheet.create({
    text: {
      fontSize: RFValue(15),
      fontWeight: 'bold',
      color: isDanger ? Colors.Danger : Colors.Black,
      letterSpacing: 1,
    },
  });
