// @ts-ignore
// @ts-nocheck
// index.tsx
import React, { useState } from 'react';
import { Container, MenuContainer, ContentContainer, ImageContainer } from './styles';
import { Character } from '../character';
import { Movies } from '../movies';
import Navbar from '../../Components/menu';
import { Comics } from '../comics';
import backgroundImage from '../../assets/images/1f97170f19594fd1d95d2d75f026c29a.jpg';

const optionsToRender = {
  "Characters": <Character />,
  "Movies": <Movies />,
  "Comics": <Comics />
}

export const Dashboard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Characters');

  const handleMenuClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <MenuContainer>
        <Navbar onItemClick={handleMenuClick} />
      </MenuContainer>
      
      <ContentContainer>
        {optionsToRender[selectedOption]}
      </ContentContainer>

      <ImageContainer>
        <img src={backgroundImage} alt="background" />
      </ImageContainer>
    </Container>
  );
};
