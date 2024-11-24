import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  text: {
    color: Colors.GrayscaleG10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(12),
  },
});
