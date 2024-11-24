import React, {memo} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

const Body: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default memo(Body);
