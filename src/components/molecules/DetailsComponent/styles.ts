import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PrimaryP03,
    marginTop: '5%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: RFValue(25),
    color: Colors.GrayscaleG10,
  },
});
