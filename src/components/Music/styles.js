import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  background: #6b6970;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px;
  flex-direction: row;
`;

export const ContentIcon = styled.View`
  position: relative;
`;

export const ImageMusic = styled.Image`
  width: 80px;
  height: 80px;
`;

export const DetailMusic = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  width: 200px;
  color: #fff;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #d0d0d0;
`;
