import React, { useCallback, useState } from 'react';
import TrackPlayer, { useTrackPlayerEvents, TrackPlayerEvents } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Feather';
import { usePlayer } from '../../hooks/player';

import { Container, ContentIcon, ImageMusic, DetailMusic, Title, Time } from './styles';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR
];

const Music = ({ data }) => {
  const { play } = usePlayer();
  const [isPlaying, setIsPlaying] = useState(false);

  useTrackPlayerEvents(events, async event => {
    const currentTrackPlay = await TrackPlayer.getCurrentTrack();

    //QUANDO A MUSICA ACABA
    if (event.state === 1 && currentTrackPlay === data.track.id) {
      setIsPlaying(false);
      return;
    }

    //TOCANDO A MUSICA
    if (event.state === 2 && currentTrackPlay === data.track.id) {
      setIsPlaying(false);
      return;
    }

    //MUSICA PAUSADA
    if (event.state === 3 && currentTrackPlay === data.track.id) {
      setIsPlaying(true);
      return;
    }
  });

  async function handlePlay() {
    const music = {
      id: data.track.id,
      url: data.track.preview_url,
      title: data.track.name,
      artist: data.track.artists[0].name,
      artwork: data.track.album.images[0].url
    };

    play(music);
  }

  async function handlePause() {
    await TrackPlayer.pause();
  }

  return <Container onPress={isPlaying ? handlePause : handlePlay}>
    <ContentIcon>
      <ImageMusic source={{ uri: data.track.album.images[0].url }} />
      {isPlaying
        ? (<Icon name="pause" size={20} color="#fff" style={{ position: 'absolute', top: 30, left: 30 }} />)
        : (<Icon name="play" size={20} color="#fff" style={{ position: 'absolute', top: 30, left: 30 }} />)
      }
    </ContentIcon>
    <DetailMusic>
      <Title numberOfLines={1}>{data.track.name}</Title>
      <Time>{data.track.duration_ms}</Time>
    </DetailMusic>
  </Container>;
}

export default Music;
