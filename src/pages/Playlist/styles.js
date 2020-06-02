import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
  padding: 15px 15px 0 15px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  width: 100%;
`;

export const Hr = styled.View`
  background: #ff9000;
  width: 22%;
  height: 2px;
  margin-bottom: 15px;
`;

export const FlatPlaylist = styled.FlatList``;

export const PlaylistItem = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border-radius: 2px;
  background-color: #6b6970;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ImageMusic = styled.Image`
  width: 30%;
  height: 90%;
  margin: 8px;
`;

export const ContentDescription = styled.View`
  height: 90%;
`;

export const PlaylistName = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 4px;
`;
export const PlaylistInfo = styled.Text`
  color: #fff;
  font-size: 12px;
`;

