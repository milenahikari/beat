import React, { useCallback, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ContentIcon, ImageMusic, DetailMusic, Title, Time } from './styles';

const Music = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
      setIsPlaying(true);
    });

  }, []);

  return <Container onPress={handlePlay}>
    <ContentIcon>
      <ImageMusic source={{ uri: data.track.album.images[0].url }} />
      {isPlaying ? (<Icon name="pause" size={20} color="#fff" style={{ position: 'absolute', top: 30, left: 30 }} />) : (<Icon name="play" size={20} color="#fff" style={{ position: 'absolute', top: 30, left: 30 }} />)}
    </ContentIcon>
    <DetailMusic>
      <Title>{data.track.name}</Title>
      <Time>{data.track.duration_ms}</Time>
    </DetailMusic>
  </Container>;
}

export default Music;
