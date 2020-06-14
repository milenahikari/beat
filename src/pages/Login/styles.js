import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['#ff9000', '#312e38'],
})`
  opacity: 0.7;
  flex: 1;
  background: #312e38;
  padding: 20px;
  position: relative;
  justify-content: center;
`;

export const WrapperText = styled.View`
  align-items: flex-start;
`;

export const SubTitle = styled.Text`
  color: #fafafa;
  font-size: 50px;
  opacity: 0.8;
  font-weight: 200;
`;

export const Title = styled.Text`
  font-size: 90px;
  color: #ff9000;
  font-weight: bold;
  margin-left: -10px;
`;

export const ContentButton = styled.View`
  position: absolute;
  bottom: 30px;
  left: 45px;
  width: 100%;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  border-radius: 100px;
  background: #ff9000;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
   color: #fff;
  font-size: 18px;
`;
