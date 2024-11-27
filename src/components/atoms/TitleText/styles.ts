import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  text: {
    color: Colors.GrayscaleG01,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(20),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
