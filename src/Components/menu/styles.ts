import styled from 'styled-components';

interface NavbarContainerProps {
  extendNavbar: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  height: ${(props) => (props.extendNavbar ? 'auto' : '80px')};
  background-color: black;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${(props) => props.theme.colors.darkred};

  @media (min-width: 900px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 20px;

  &:hover {
    color: #c10000;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 0.3em;
  width: 100%;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #c10000;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 50px;
`;

export const OpenLinksButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blueviolet; */

  @media (min-width: 900px) {
    display: none;
  }
`;

export const NavbarLineExtended = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 2em;
  justify-content: flex-start;
`;

export const NavbarButton = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin-left: 3em;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavbarButtonExtended = styled.div`
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 6em;
  width: 100%;
  justify-content: flex-end;
`;

export const Nameuser = styled.div`
  color: #fff;
  font-weight: bold;
  font-family: 'Kastelov';
`;