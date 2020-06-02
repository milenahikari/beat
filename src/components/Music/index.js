import React, { useCallback } from 'react';
import TrackPlayer from 'react-native-track-player';

import { Container, ImageMusic, DetailMusic, Title, Time } from './styles';

const Music = ({ data }) => {
  const handlePlay = useCallback(() => {

    TrackPlayer.setupPlayer().then(async () => {

      // Adds a track to the queue
      await TrackPlayer.add({
        id: data.track.id,
        url: data.track.preview_url,
        title: data.track.name,
        artist: data.track.artists[0].name,
        artwork: data.track.album.images[0].url
      });

      // Starts playing it
      TrackPlayer.play();

    });

  }, []);

  return <Container onPress={handlePlay}>
    <ImageMusic source={{ uri: data.track.album.images[0].url }} />
    <DetailMusic>
      <Title>{data.track.name}</Title>
      <Time>{data.track.duration_ms}</Time>
    </DetailMusic>
  </Container>;
}

export default Music;
