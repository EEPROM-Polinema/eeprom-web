import React from 'react';
import '../styles/index.scss'; // Importing the main SCSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EEPROM Polinema. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
