import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { usePlayer } from '../../hooks/player';
import Progress from '../Progress';
import TrackPlayer, { useTrackPlayerEvents, TrackPlayerEvents } from 'react-native-track-player';

import { Container, PlayerMusic, NameMusic } from './styles';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR
];

const Player = () => {
  const { playing } = usePlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  useTrackPlayerEvents(events, async event => {

    //TOCANDO A MUSICA
    if (event.state === 1 || event.state == 2) {
      setIsPlaying(false);
      return;
    }

    //MUSICA PAUSADA
    if (event.state === 3) {
      setIsPlaying(true);
      return;
    }
  });

  return (
    !!playing.title &&
    (
      <Container>
        <PlayerMusic>
          {isPlaying && <Progress />}
          {isPlaying ? (<Icon name="pause-circle" color="#fff" size={40} />) : (<Icon name="play-circle" color="#fff" size={40} />)}
        </PlayerMusic>
        <NameMusic numberOfLines={1}>{playing.title}</NameMusic>
      </Container>
    )
  );
}


export default Player;
