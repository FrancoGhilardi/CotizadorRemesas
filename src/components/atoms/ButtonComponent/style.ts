import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PrimaryP03,
    width: '90%',
    height: '100%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.Black,
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
});
