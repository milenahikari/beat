import React from 'react';
import background from '../../assets/images/background.jpg';

import { Container, Content, WrapperText, SubTitle, Title, ContentButton, ButtonLogin, ButtonText } from './styles';

const Login = () => {
  return (
    <Container source={background}>
      <Content>
        <WrapperText>
          <SubTitle>Feel the</SubTitle>
          <Title>Beat</Title>
        </WrapperText>
        <ContentButton>
          <ButtonLogin>
            <ButtonText>SignIn</ButtonText>
          </ButtonLogin>
        </ContentButton>
      </Content>
    </Container>
  )
}

export default Login;
