import React, { useEffect, useState, useRef } from 'react';
import marvelData from '../../data/marvelData.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import imgInfo from '../../assets/images/ce39b8c48c7fa00c6f8a61bd98028407.png';

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
  DropdownContainer,
} from './styles';

type MoviesData = {
  name: string;
  sinopse: string;
  image: string;
  note: number;
  data: string;
  cronologic: number;
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

export const Movies: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [movies, setMovies] = useState<MoviesData[]>([]);
  const [indexMoviesOpen, setIndexMoviesOpen] = useState(-1);
  const [filterOption, setFilterOption] = useState<'Lançamento' | 'Cronológica'>('Lançamento');

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setMovies(marvelData.movies);
  }, []);

  const toggleDetails = (index: number) => {
    setIndexMoviesOpen(index);
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
    setIndexMoviesOpen(-1);
  };

  const handleFilterChange = (option: 'Lançamento' | 'Cronológica') => {
    setFilterOption(option);
    if (option === 'Cronológica') {
      const sortedMovies = [...movies].sort((a, b) => a.cronologic - b.cronologic);
      setMovies(sortedMovies);
    } else {
      const originalOrder = marvelData.movies.map(movie => movie);
      setMovies(originalOrder);
    }
  };

  return (
    <Container>
      <DropdownContainer>
        <select value={filterOption} onChange={e => handleFilterChange(e.target.value as 'Lançamento' | 'Cronológica')}>
          <option value="Lançamento">Lançamento</option>
          <option value="Cronológica">Cronológica</option>
        </select>
      </DropdownContainer>
      <Carousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
        <InnerCarousel drag="x" dragConstraints={{ right: 0, left: -width }}>
          {movies.map((movie, index) => (
            <Item className="item" key={index}>
              <ContainerBackground isActive={indexMoviesOpen === index}>
                <CaracterContainer backgroundImage={movie?.image} key={movie?.image}>
                  <CaracterDiv isShow={indexMoviesOpen !== index}>
                    <CaracterName>{movie?.name}</CaracterName>
                    <CaracterHistory>{movie?.sinopse}</CaracterHistory>
                    <DetailsButton onClick={() => toggleDetails(index)}>Ver detalhes</DetailsButton>
                  </CaracterDiv>
                </CaracterContainer>

                <div className="infos">
                  <div className="divInfo">
                    <h1>{movie?.name}</h1>
                    <strong>Aparições:</strong>
                    <p>{movie.sinopse}</p>
                    <h4>Disponível em streaming:</h4>
                    <ImageContainer>
                      <img src={imgInfo} alt="background" />
                    </ImageContainer>

                    <h3>Crítica</h3>
                    <GenerateStarRating rating={movie.note} />
                  </div>
                  {indexMoviesOpen === index && (
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
