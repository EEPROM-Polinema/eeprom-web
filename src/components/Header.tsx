import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#1D24CA', color: '#FFF', padding: '1rem' }}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EEPROM</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
