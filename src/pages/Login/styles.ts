import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInLogin = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(-400px);
  }
`;

const moveBackToCenter = keyframes`
 from {
    opacity: 0;
    transform: translateX(-400px);
  }
  to {
    opacity: 1;
    transform: translateX(-0%);
  }
`;

const fadeInImage = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`;

export const MarvelContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: auto;
  width: 237px;
  height: 95px;
  background-color: ${(props) => props.theme.colors.red};
`;

export const MarvelText = styled.h1`
  color: #fff;
  font-family: 'Marvel';
  font-size: 100px;
`;

export const AnimatedLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInLogin} 0.5s ease forwards;

  @media (max-width: 1200px) {
    animation: ${moveBackToCenter} 0.5s ease forwards;
  }
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 30px;
  font-weight: bold;
  font-family: 'Kastelov';
  margin-top: 1em;
  margin-bottom: 20px;
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: 20px;
  font-weight: 200;
  font-family: 'Kastelov';
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding-left: 20px;
  max-width: 383px;
  height: 73px;
  border-radius: 37px;
  border: none;
  margin-top: 1em;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.red};
    outline: none;
  }

  &::placeholder {
    color: #d1d1d6;
    font-weight: 200;
    font-family: 'Kastelov';
  }
`;

export const LineOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.5em;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
  border-radius: 50%;
`;

export const CheckboxText = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Kastelov';
`;

export const ForgotPassword = styled(Link)`
  color: ${(props) => props.theme.colors.red};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Kastelov';
`;

export const Button = styled.button`
  max-width: 383px;
  height: 55px;
  background-color: ${(props) => props.theme.colors.red};
  color: #fff;
  padding: 4px;
  font-size: 28px;
  font-weight: 500;
  border-radius: 37px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c10000;
  }
`;

export const LineOut = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextLineOut = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Kastelov';
`;

export const LinkLineOut = styled(Link)`
  color: ${(props) => props.theme.colors.red};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Kastelov';
  margin-left: 5px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  overflow: hidden;
  z-index: -1;
  animation: ${fadeInImage} 0.5s ease forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(to right, transparent, black);
    -webkit-mask-image: linear-gradient(to right, transparent, black);
    transition: opacity 1s ease;
    opacity: 0.8;
  }
`;
