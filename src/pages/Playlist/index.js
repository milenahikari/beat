import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Hr, ContainerMusic, PlaylistItem, ContentDescription, ImageMusic, NameMusic, InfoMusic } from './styles';

function Playlist() {
  const navigation = useNavigation();

  return <Container>
    <Title>Playlist</Title>
    <Hr />
    <PlaylistItem onPress={() => navigation.navigate('DetailPlaylist')}>
      <ImageMusic
        source={{ uri: 'https://images.8tracks.com/cover/i/002/682/752/tumblr_ldsw8gjimt1qdq19emodif-1948.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max' }}
        resizeMode="contain"
      />
      <ContentDescription>
        <NameMusic>Indie folk</NameMusic>
        <InfoMusic>50 songs</InfoMusic>
      </ContentDescription>
    </PlaylistItem>

    <PlaylistItem>
      <ImageMusic source={{ uri: 'https://images.8tracks.com/cover/i/002/682/752/tumblr_ldsw8gjimt1qdq19emodif-1948.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max' }}
        resizeMode="contain" />
      <ContentDescription>
        <NameMusic>Indie folk</NameMusic>
        <InfoMusic>50 songs</InfoMusic>
      </ContentDescription>
    </PlaylistItem>

  </Container>
}

Playlist.NavigationOptions = {};

export default Playlist;
