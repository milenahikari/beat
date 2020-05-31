import React from 'react';

import Playlist from '../pages/Playlist';
import SearchArtist from '../pages/SearchArtist';

import Icon from 'react-native-vector-icons/Feather';

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
    <AppTab.Screen name="Playlist" component={Playlist}
      options={{
        tabBarLabel: "Playlist",
        tabBarIcon: ({ color }) => (<Icon name="play" size={20} color={color} />)
      }}
    />
    <AppTab.Screen name="SearchArtist" component={SearchArtist} options={{
      tabBarLabel: "Buscar",
      tabBarIcon: ({ color }) => (<Icon name="search" size={20} color={color} />)
    }} />
  </AppTab.Navigator>);
}

export default AppRoutes;
