import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './hooks/index';
import Player from './components/Player';

// import { Container } from './styles';

const src = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
        <Player />
      </AppProvider>
    </NavigationContainer>
  );
}

export default src;
