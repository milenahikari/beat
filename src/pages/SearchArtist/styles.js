import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const BackgroundArtist = styled.ImageBackground`
  width: 100%;
  height: 300px;
  position: relative;
`;

export const WrapperSearch = styled.View`
  width: 100%;
  height: 100px;
  padding: 20px;
  position: absolute;
  flex-direction: row;
  z-index: 9999;

`;

export const Icon = styled(FeatherIcon)`
  position: absolute;
  left: 35px;
  top: 55px;
  z-index: 99999;
`;

export const InputArtist = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin-top: 20px;
  padding-left: 45px;
  padding-right: 20px;
  background-color: #6b6970;
  opacity: 0.5;
  color: #fff;
`;

export const TrackList = styled.FlatList`
  margin-bottom: 20px;
`;
