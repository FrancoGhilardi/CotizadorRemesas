import React, {memo} from 'react';
import {Alert, Button, View} from 'react-native';
import {styles} from './styles';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

export default memo(Footer);
