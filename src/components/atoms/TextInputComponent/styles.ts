import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  input: {
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: RFValue(15),
    width: '85%',
    color: Colors.GrayscaleG10,
    backgroundColor: Colors.GrayscaleG01,
  },
});
