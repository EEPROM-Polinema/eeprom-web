import React from 'react';
import Image from 'next/image';
import '../styles/index.scss';
import eeprom from '../../public/logo_eeprom.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image src={eeprom} width={40} height={40} alt="EEPROM Logo" />
          <span>EEPROM Polinema</span>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Profile</li>
            <li className="nav-item">Article</li>
            <li className="nav-item">Contact us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
