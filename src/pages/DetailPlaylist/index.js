import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from '../../services/api';

import { MusicList, Container, Header, PlaylistCover, DetailHeader, PlaylistName, PlaylistInfo, ContainerDetail, Title } from './styles';
import Music from '../../components/Music';

const DetailPlaylist = ({ route }) => {
  const { id } = route.params;
  const [detailPlaylist, setDetailPlaylist] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetailPlaylist() {
      const response = await api.get(`/playlists/${id}`);
      const { data } = response;
      setDetailPlaylist(data);
      setLoading(false);
    }

    getDetailPlaylist();
  }, [id]);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999"></ActivityIndicator>
      </View>
    );
  }

  return <Container>
    <Header>
      <PlaylistCover source={{ uri: detailPlaylist.images[0].url }}
        resizeMode="cover" />
      <DetailHeader>
        <PlaylistName>{detailPlaylist.name}</PlaylistName>
        <PlaylistInfo>50 songs</PlaylistInfo>
      </DetailHeader>
    </Header>
    <ContainerDetail>
      <Title>Minhas músicas</Title>

      <MusicList data={detailPlaylist.tracks.items} renderItem={({ item }) => (
        <Music data={item} />
      )} />
    </ContainerDetail>
  </Container>;
}

export default DetailPlaylist;
