import React from 'react';
import '../styles/index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
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
