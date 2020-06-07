import React, { useMemo, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Feather';
import { usePlayer } from '../../hooks/player';

import { Container, ContentIcon, ImageMusic, DetailMusic, Title, Time } from './styles';

const Music = ({ data }) => {
  const { play, stop, isPlaying } = usePlayer();
  const [playThisMusic, setPlayThisMusic] = useState(false);

  useMemo(async () => {
    const currentTrackPlay = await TrackPlayer.getCurrentTrack();

    if (currentTrackPlay === data.track.id && isPlaying) {
      setPlayThisMusic(true);
      return;
    }
    setPlayThisMusic(false);

  }, [isPlaying, TrackPlayer, setPlayThisMusic]);

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

  function handleStop() {
    stop();
  }

  return <Container onPress={playThisMusic ? handleStop : handlePlay}>
    <ContentIcon>
      <ImageMusic source={{ uri: data.track.album.images[0].url }} />
      {playThisMusic
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
