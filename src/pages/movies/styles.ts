import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 60%;

  min-height: 100%;
`;

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
`;

export const Item = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-height: 35rem;
  padding: 40px;
`;

interface IContainerBackgroundProps {
  isActive: boolean;
}

export const ContainerBackground = styled.div<IContainerBackgroundProps>`
  position: relative;
  display: flex;

  transition: all ease 0.5s;

  width: ${({ isActive }) => (isActive ? 659 : 289)}px;

  height: 439px;
  border-radius: 30px;
  background: rgb(253, 29, 29);
  background: -moz-linear-gradient(90deg, rgba(253, 29, 29, 1) 47%, rgba(64, 14, 14, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(253, 29, 29, 1) 47%, rgba(64, 14, 14, 1) 100%);
  background: linear-gradient(90deg, rgba(253, 29, 29, 1) 47%, rgba(64, 14, 14, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fd1d1d",endColorstr="#400e0e",GradientType=1);

  .infos {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 3.5em;
    color: #ffff;

    div {
      max-width: 289px;
    }

    h1 {
      font-size: 30px;
      font-weight: bold;
      font-family: 'Kastelov';
    }

    ul li {
      list-style: none;
      font-size: 15px;
      font-weight: 100;
      font-family: 'Kastelov';
    }

    .wrapper-stars {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    h3 {
      margin-top: 1em;
      font-size: 20px;
      font-weight: 400;
      font-family: 'Kastelov';
    }

    h4 {
      margin-top: 1em;
      font-size: 12px;
      font-weight: 500;
      font-family: 'Kastelov';
    }

    p {
      font-size: 12px;
      font-weight: 100;
      font-family: 'Kastelov';
    }
  }
`;

export const CaracterContainer = styled.div<{ backgroundImage: string }>`
  position: absolute;

  width: 289px;
  height: 100%;
  pointer-events: auto;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  color: #fff;
  text-align: center;
`;

interface ICaracterDivProps {
  isShow: boolean;
}

export const CaracterDiv = styled.div<ICaracterDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 50%;
  bottom: 0;
  top: 50%;
  border-radius: 30px;
  padding: 20px;

  background: rgb(255, 0, 0);
  background: -moz-linear-gradient(0deg, rgba(255, 0, 0, 0.39539565826330536) 0%, rgba(255, 0, 0, 1) 91%);
  background: -webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.39539565826330536) 0%, rgba(255, 0, 0, 1) 91%);
  background: linear-gradient(0deg, rgba(255, 0, 0, 0.39539565826330536) 0%, rgba(255, 0, 0, 1) 91%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#ff0000",GradientType=1);

  word-wrap: break-word;

  transition: all ease 0.4s;

  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
`;

export const CaracterName = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: 'Kastelov';
  font-weight: bold;
`;

export const CaracterHistory = styled.div`
  font-size: 12px;
  font-weight: 100;
  font-family: 'Kastelov';
  text-align: start;
`;

export const DetailsButton = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: 'Kastelov';
  font-weight: bold;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 350px;
  position: relative;
  border-radius: 30px;
  background: linear-gradient(to right, rgb(255, 0, 0), #707070);

  h1 {
    font-size: 18px;
    text-align: center;
    font-family: 'Kastelov';
    font-weight: bold;
    color: #fff;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    font-family: 'Kastelov';
    font-weight: bold;
    color: #fff;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  pointer-events: none;
`;

export const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

export const LeftArrow = styled(NavigationButton)`
  left: 10px;
`;

export const RightArrow = styled(NavigationButton)`
  right: 10px;
`;

export const DetailsName = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: 'Kastelov';
  font-weight: bold;
  color: #fff;
`;

export const DetailsAppearances = styled.p`
  font-size: 18px;
  font-weight: 100;
  font-family: 'Kastelov';
  text-align: start;
  color: #fff;
`;

export const DetailsNote = styled.div``;

export const CloseButton = styled.div`
  /* position: fixed; */
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  padding: 10px;
  border-radius: 50%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 47px;
  border-radius: 10px;
  background-color: #fff;

  img {
    width: 48px;
    height: 32px;
    object-fit: cover;
  }
`;

export const DropdownContainer = styled.div`
margin-top: 3em;
  margin-bottom: auto;

  select {
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.red};
    cursor: pointer;
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.red};
    appearance: none; 
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: none;
      border-color: red;
    }

    option {
      background-color: #000;
      border: none;
      ${(props) => props.theme.colors.red}
    }
  }
`;
