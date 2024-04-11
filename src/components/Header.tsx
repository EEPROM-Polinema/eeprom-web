import React from "react";
import Link from "next/link";
import Image from 'next/image';
import eeprom from "../../public/logo_eeprom.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center ml-8">
              <Image src={eeprom} width={40} height={40} alt="EEPROM Logo" />
              <span className="text-gray-600 text-xl cursor-pointer ml-2">EEPROM Polinema</span>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="px-2">
              <Link href="/">
                <span className="text-gray-900 hover:text-cyan-600 cursor-pointer">Home</span>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/about">
                <span className="text-gray-900 hover:text-cyan-600 cursor-pointer">Profile</span>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/about">
                <span className="text-gray-900 hover:text-cyan-600 cursor-pointer">Article</span>
              </Link>
            </li>
            <li className="px-2">
              <Link href="/contact">
                <span className="text-gray-900 hover:text-cyan-600 cursor-pointer">Contact us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
