import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { runTiming } from 'react-native-redash';

import CircularProgress from './circularProgress';

const { Clock } = Animated;

export default () => {
  const clock = new Clock();
  const config = {
    duration: 30 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <CircularProgress progress={runTiming(clock, 0, config)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -4.4,
    left: -5.5,
    width: 50,
    height: 50,
    backgroundColor: '#1a1527',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
