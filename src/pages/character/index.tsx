import React, { useEffect, useState, useRef } from 'react';
import marvelData from '../../data/marvelData.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import {
  Container,
  Carousel,
  InnerCarousel,
  Item,
  CaracterContainer,
  DetailsButton,
  CaracterDiv,
  CaracterName,
  CaracterHistory,
  LeftArrow,
  RightArrow,
  ContainerBackground,
  CloseButton,
} from './styles';

type CharacterData = {
  name: string;
  history: string;
  appearances: string[];
  image: string;
  note: number;
};

interface IGenerateStarRatingProps {
  rating: number;
}

function GenerateStarRating({ rating }: IGenerateStarRatingProps) {
  const starsTotal = 5;

  const roundedRating = Math.round(rating * 2) / 2;

  const fullStars = Math.floor(roundedRating);
  const halfStars = Math.ceil(roundedRating - fullStars);
  const emptyStars = starsTotal - fullStars - halfStars;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<BsStarFill color="#FFFF00" />);
  }

  for (let i = 0; i < halfStars; i++) {
    starElements.push(<BsStarHalf color="#FFFF00" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starElements.push(<BsStarFill color="#84848D" />);
  }

  return <div className="wrapper-stars">{starElements}</div>;
}

export const Character: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      console.log('carousel current:', carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [indexCharacterOpen, setIndexCharacterOpen] = useState(-1);

  useEffect(() => {
    setCharacters(marvelData.characters);
  }, []);

  const toggleDetails = (index: number) => {
    setIndexCharacterOpen(index);
  };

  const navigateLeft = () => {
    if (carousel.current) {
      carousel.current.scrollLeft -= 380;
    }
  };

  const navigateRight = () => {
    if (carousel.current) {
      carousel.current.scrollLeft += 380;
    }
  };

  const closeDetails = () => {
    setIndexCharacterOpen(-1);
  };

  return (
    <Container>
      <Carousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {characters.map((character, index) => (
            <Item className="item" key={index}>
              <ContainerBackground isActive={indexCharacterOpen === index}>
                <CaracterContainer backgroundImage={character?.image} key={character?.image}>
                  <CaracterDiv isShow={indexCharacterOpen !== index}>
                    <CaracterName>{character?.name}</CaracterName>
                    <CaracterHistory>{character?.history}</CaracterHistory>
                    <DetailsButton onClick={() => toggleDetails(index)}>Ver detalhes</DetailsButton>
                  </CaracterDiv>
                </CaracterContainer>

                <div className="infos">
                  <div className="divInfo">
                    <h1>{character?.name}</h1>
                    <strong>Aparições:</strong>
                    <ul>
                      {character?.appearances?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h3>Avaliações dos Fãs</h3>
                    <GenerateStarRating rating={character.note} />
                  </div>
                  {indexCharacterOpen === index && (
                    <div>
                      <CloseButton onClick={closeDetails}>
                        <IoCloseCircleOutline color="#fff" size={30} />
                      </CloseButton>
                    </div>
                  )}
                </div>
              </ContainerBackground>
            </Item>
          ))}
        </InnerCarousel>
        <LeftArrow onClick={navigateLeft}>
          <FaArrowLeft color="red" size={30} />
        </LeftArrow>

        <RightArrow onClick={navigateRight}>
          <FaArrowRight color="red" size={30} />
        </RightArrow>
      </Carousel>
    </Container>
  );
};
