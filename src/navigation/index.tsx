import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {RootStackParamList} from '../types';
import OperationDetailsScreen from '../screens/OperationDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="OperationDetailsScreen"
        component={OperationDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default RootNavigation;
