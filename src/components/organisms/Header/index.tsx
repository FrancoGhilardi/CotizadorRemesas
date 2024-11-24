import React, {memo} from 'react';
import {View} from 'react-native';
import {ChangeMoney, HeaderText} from '../../molecules';
import {styles} from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderText>
        <ChangeMoney />
      </HeaderText>
    </View>
  );
};

export default memo(Header);
