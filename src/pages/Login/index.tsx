import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  MarvelContainer,
  MarvelText,
  AnimatedLoginForm,
  Title,
  Subtitle,
  Input,
  Checkbox,
  CheckboxInput,
  CheckboxText,
  LineOption,
  ForgotPassword,
  Button,
  LineOut,
  TextLineOut,
  LinkLineOut,
  ImageContainer,
} from './styles';
import theme from '../../theme/theme';
import backgroundImage from '../../assets/images/1f97170f19594fd1d95d2d75f026c29a.jpg';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => setShowLoginForm(true), 1000);
      setTimeout(() => setShowImage(true), 500);
    }, 2000);
  }, []);

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <AnimatedLoginForm>
        <MarvelContainer>
          <MarvelText>MARVEL</MarvelText>
        </MarvelContainer>

        {showLoginForm && (
          <>
            <Title>Bem-vindo(a) de volta!</Title>
            <Subtitle>Acesse sua conta:</Subtitle>
            <Input type="text" placeholder="Usuário" />
            <Input type="password" placeholder="Senha" />
            <LineOption>
              <Checkbox>
                <CheckboxInput type="checkbox" />
                <CheckboxText>Salvar login</CheckboxText>
              </Checkbox>
              <Link to="">
                <ForgotPassword to="">Esqueci a senha</ForgotPassword>
              </Link>
            </LineOption>
            <Button onClick={handleLogin}>Entrar</Button>
            <LineOut>
              <TextLineOut>Ainda não tem o login? </TextLineOut>
              <Link to="">
                <LinkLineOut to="">Cadastra-se</LinkLineOut>
              </Link>
            </LineOut>
          </>
        )}
      </AnimatedLoginForm>

      {showImage && (
        <ImageContainer>
          <img src={backgroundImage} alt="background" />
        </ImageContainer>
      )}
    </Container>
  );
};
