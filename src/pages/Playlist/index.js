import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Player from '../../components/Player';

import { Container, Title, Hr, ContainerMusic, PlaylistItem, ContentDescription, ImageMusic, PlaylistName, PlaylistOwner, PlaylistInfo, FlatPlaylist } from './styles';

function Playlist() {
  const navigation = useNavigation();
  const [myPlaylist, setMyPlaylist] = useState([]);

  useEffect(() => {
    async function getPlaylist() {
      const response = await api.get('/me/playlists');
      const { items } = response.data;
      setMyPlaylist(items);
    }
    getPlaylist();
  }, []);

  return (
    <>
      <Container>
        <Title>Playlist</Title>
        <Hr />

        <FlatPlaylist
          data={myPlaylist}
          renderItem={({ item }) => (
            <PlaylistItem onPress={() => navigation.navigate('DetailPlaylist', {
              id: item.id
            })}>
              <ImageMusic
                source={{ uri: item.images[0].url }}
                resizeMode="contain"
              />
              <ContentDescription>
                <PlaylistName numberOfLines={1}>{item.name}</PlaylistName>
                <PlaylistOwner>By {item.owner.display_name}</PlaylistOwner>
                <PlaylistInfo>{item.tracks.total} songs</PlaylistInfo>
              </ContentDescription>
            </PlaylistItem>
          )} />

      </Container>
      <Player />
    </>
  );

}

export default Playlist;
