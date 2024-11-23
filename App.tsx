import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/index.tsx';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
