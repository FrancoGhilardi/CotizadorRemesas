import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    height: '60%',
    alignItems: 'center',
    minHeight: 300,
  },
  subcontainer: {
    backgroundColor: Colors.PrimaryP06,
    width: '90%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
