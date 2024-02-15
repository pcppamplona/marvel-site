import React, { useEffect, useState, useRef } from 'react';
import marvelData from '../../data/marvelData.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import imgInfo1 from '../../assets/images/b5baf93077f84b6017d7d38ae6dd4425.png';
import imgInfo2 from '../../assets/images/dc2f25fb62725d2e4bf7810aa4256c37.png';

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
  ImageContainer,
} from './styles';

type ComicsData = {
  name: string;
  sinopse: string;
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

export const Comics: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      console.log('carousel current:', carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const [comics, setComics] = useState<ComicsData[]>([]);
  const [indexComicsOpen, setIndexComicsOpen] = useState(-1);

  useEffect(() => {
    setComics(marvelData.comics);
  }, []);

  const toggleDetails = (index: number) => {
    setIndexComicsOpen(index);
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
    setIndexComicsOpen(-1);
  };

  return (
    <Container>
      <Carousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {comics.map((comic, index) => (
            <Item className="item" key={index}>
              <ContainerBackground isActive={indexComicsOpen === index}>
                <CaracterContainer backgroundImage={comic?.image} key={comic?.image}>
                  <CaracterDiv isShow={indexComicsOpen !== index}>
                    <CaracterName>{comic?.name}</CaracterName>
                    <CaracterHistory>{comic?.sinopse}</CaracterHistory>
                    <DetailsButton onClick={() => toggleDetails(index)}>Ver detalhes</DetailsButton>
                  </CaracterDiv>
                </CaracterContainer>

                <div className="infos">
                  <div>
                    <h1>{comic?.name}</h1>
                    <p>{comic.sinopse}</p>
                    <h4>Disponível para compra:</h4>
                    <ImageContainer>
                      <img src={imgInfo2} alt="imgInfo2" />
                      <img src={imgInfo1} style={{marginLeft: '10px'}} alt="imgInfo1" />
                    </ImageContainer>
                    <h3>Crítica</h3>
                    <GenerateStarRating rating={comic.note} />

                    {indexComicsOpen === index && (
                      <div>
                        <CloseButton onClick={closeDetails}>
                          <IoCloseCircleOutline color="#fff" size={30} />
                        </CloseButton>
                      </div>
                    )}
                  </div>
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
