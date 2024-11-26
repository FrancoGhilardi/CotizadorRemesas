import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/index.tsx';
import {Provider} from 'react-redux';
import {store} from './src/redux/store.ts';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
