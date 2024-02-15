import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const MenuContainer = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60%;
  overflow: hidden;
  z-index: -1;

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


