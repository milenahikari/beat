import React, { useState, useCallback } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import api from '../../services/api';
import Music from '../../components/Music';
import { Container, BackgroundArtist, WrapperSearch, Icon, InputArtist, TrackList } from './styles';

const SearchArtist = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [artist, setArtist] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleSearchArtist = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseArtist = await api.get(`/search?q=${search}&type=artist&limit=1`);

      const { artists } = responseArtist.data;

      setArtist(artists);

      const artistId = artists.items[0].id;

      const responseTopTracks = await api.get(
        `artists/${artistId}/top-tracks?country=BR`,
      );

      const { tracks } = responseTopTracks.data;

      setTopTracks(tracks);
      setIsLoading(false);

    } catch (e) {
      Alert.alert('Error', "We couldn't find the artist you were looking for... try again");
      setIsLoading(false);
    }
  }, [search]);

  return (<Container>
    {artist.length != 0 && <BackgroundArtist source={{ uri: artist.items[0].images[0].url }} />}

    <WrapperSearch>
      {isLoading
        ? <ActivityIndicator
          size="small"
          color="#ff9900"
          style={{ position: "absolute", left: 35, top: 55, zIndex: 999 }}
        />
        : <Icon
          name="search"
          size={20}
          color={isFocused ? '#ff9900' : '#fff'}
        />
      }

      <InputArtist
        placeholder="Search an artist"
        placeholderTextColor="#fff"
        autoCorrect={false}

        //Identifica se o input recebeu/perdeu foco
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

        returnKeyType="search" //Define o botão de search no teclado
        onChangeText={setSearch} //Cada vez que o valor do input muda estou guardando seu valor no state
        value={search}
        onSubmitEditing={() => handleSearchArtist()} // Identifica que o usuário apertou em enviar pelo teclado
      />
    </WrapperSearch>
    {
      <TrackList data={topTracks} renderItem={({ item }) => {
        // return <Text>Oi</Text>
        return <Music track={item} />
      }}>
      </TrackList>

    }
  </Container >);
}

export default SearchArtist;
