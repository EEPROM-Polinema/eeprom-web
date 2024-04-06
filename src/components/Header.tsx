import React from 'react';
import '../styles/index.scss'; // Importing the main SCSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span>EEPROM</span>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">About</li>
            <li className="nav-item">Community</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
