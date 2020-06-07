import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { usePlayer } from '../../hooks/player';
import Progress from '../Progress';

import { Container, PlayerMusic, WrapperButton, NameMusic } from './styles';

const Player = () => {
  const { play, stop, isPlaying, haveCurrentMusic } = usePlayer();

  const handlePlay = useCallback(() => { play(haveCurrentMusic) }, []);
  return (
    !!haveCurrentMusic.title &&
    (
      <Container>
        <PlayerMusic>
          {isPlaying && <Progress />}
          {isPlaying
            ? (
              <WrapperButton onPress={handlePlay}>
                <Icon name="pause-circle" color="#fff" size={40} />
              </WrapperButton>)
            : (
              <WrapperButton onPress={stop}>
                <Icon name="play-circle" color="#fff" size={40} />
              </WrapperButton>)}
        </PlayerMusic>
        <NameMusic numberOfLines={1}>{haveCurrentMusic.title}</NameMusic>
      </Container>
    )
  );
}


export default Player;
