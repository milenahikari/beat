import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Playlist from '../pages/Playlist';
import SearchArtist from '../pages/SearchArtist';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppTab = createBottomTabNavigator();

function AppRoutes() {
  return (<AppTab.Navigator
    tabBarOptions={{
      activeTintColor: "#FF9000",
      inactiveTintColor: "#d0d0d0",
      style: {
        backgroundColor: "#3E3b46"
      }
    }}
  >
    <AppTab.Screen name="Playlist" component={Playlist} options={{
      tabBarIcon: () => (<Icon name="adn" color="#fff" size={26} />)
    }} />
    <AppTab.Screen name="SearchArtist" component={SearchArtist} />
  </AppTab.Navigator>);
}

export default AppRoutes;
