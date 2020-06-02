import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
`;
export const PlaylistCover = styled.Image`
  flex: 1;
  position: relative;
`;
export const DetailHeader = styled.View`
  width: 100%;
  height: 40%;
  bottom: 0px;
  position: absolute;
  padding: 15px;
  background-color: #6b6970;
  opacity: 0.6;
`;

export const PlaylistName = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const PlaylistInfo = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ContainerDetail = styled.View`
  padding: 20px;

`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const MusicList = styled.FlatList`
  margin-bottom: 20px;
`;
