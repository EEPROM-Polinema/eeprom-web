import React from 'react';
import Image from 'next/image';
import '../styles/index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Image src="/../public/logo_eeprom.svg" width={40} height={40} alt="EEPROM Logo" />
          <span>EEPROM Polinema</span>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Profil</li>
            <li className="nav-item">Artikel</li>
            <li className="nav-item">Hubungi Kami</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
