import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarLineExtended,
  NavbarButton,
  NavbarButtonExtended,
  Nameuser,
} from './styles';
import LogoImg from '../../assets/images/preview.png';
import { FaTimes, FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

interface NavbarProps {
  onItemClick: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onItemClick }) => {
  const navigate = useNavigate();
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [iconColor, setIconColor] = useState('#fff');
  const [userImage, setUserImage] = useState<string | null>(localStorage.getItem('userImage'));

  const [nameUser, setNameUser] = useState<string>('Username');

  useEffect(() => {
    localStorage.setItem('userImage', userImage || '');
  }, [userImage]);

  const handleItemClick = (option: string) => {
    onItemClick(option);
    setExtendNavbar(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleUserImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderUserIcon = () => {
    if (userImage) {
      return (
        <img
          src={userImage}
          alt="User"
          style={{ width: 40, height: 40, marginRight: '8px', borderRadius: '50%', cursor: 'pointer' }}
          onClick={() => document.getElementById('fileInput')?.click()}
        />
      );
    }
    return (
      <FaUserCircle
        size={40}
        color="#fff"
        style={{ marginRight: '8px', cursor: 'pointer' }}
        onClick={() => document.getElementById('fileInput')?.click()}
      />
    );
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink onClick={() => handleItemClick('Characters')}>Personagens</NavbarLink>
            <NavbarLink onClick={() => handleItemClick('Movies')}>Filmes</NavbarLink>
            <NavbarLink onClick={() => handleItemClick('Comics')}>HQs</NavbarLink>

            <NavbarButton>
              {renderUserIcon()}
              <Nameuser>{nameUser}</Nameuser>
              <FaSignOutAlt
                size={24}
                color={iconColor}
                onClick={handleLogout}
                style={{ cursor: 'pointer', transition: 'color 0.5s', marginLeft: '2em' }}
                onMouseEnter={() => setIconColor('#c10000')}
                onMouseLeave={() => setIconColor('#fff')}
              />
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleUserImageChange}
              />
            </NavbarButton>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <FaTimes /> : <FaBars />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLineExtended>
            {renderUserIcon()}
            <Nameuser>{nameUser}</Nameuser>
          </NavbarLineExtended>

          <NavbarLinkExtended onClick={() => handleItemClick('Characters')}>Personagens</NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => handleItemClick('Movies')}>Filmes</NavbarLinkExtended>
          <NavbarLinkExtended onClick={() => handleItemClick('Comics')}>HQs</NavbarLinkExtended>

          <NavbarButtonExtended>
            <FaSignOutAlt
              size={24}
              color={iconColor}
              onClick={handleLogout}
              style={{ cursor: 'pointer', transition: 'color 0.3s', marginLeft: '1.5em' }}
              onMouseEnter={() => setIconColor('#c10000')}
              onMouseLeave={() => setIconColor('#fff')}
            />
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleUserImageChange}
            />
          </NavbarButtonExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
