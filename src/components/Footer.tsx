import React from "react";
import "../styles/globals.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 items-center absolute bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full md:w-4/5 lg:w-3/4 space-y-8">
          <div className="flex justify-between">
            <div className="w-1/5 md:mr-8 text-gray-600">
              <h2 className="text-lg font-bold">EEPROM</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="w-1/5 md:mr-8 text-gray-600">
              <h2 className="text-lg font-bold">Address</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.35203409994756!2d112.61450333613683!3d-7.945429583031798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883003dd47a6d%3A0x869957f7f4ec8059!2sEEPROM%20Polinema!5e0!3m2!1sen!2sid!4v1712394403548!5m2!1sen!2sid"
                width="225"
                height="225"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Maps"
                className="mt-4"
              ></iframe>
            </div>

            <div className="w-1/5 md:mr-8 text-gray-600">
              <h2 className="text-lg font-bold">Menu</h2>
              <ul className="list-none">
                <li>Home</li>
                <li>Profile</li>
                <li>Article</li>
              </ul>
            </div>

            <div className="w-1/5 md:mr-8 text-gray-600">
              <h2 className="text-lg font-bold">Contact us</h2>
              <ul className="list-none">
                <li>
                  <a
                    href="https://github.com/EEPROM-Polinema"
                    className="hover:text-blue-500"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/eeprom.polinema/"
                    className="hover:text-blue-500"
                  >
                    Instagram
                  </a>
                </li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-600 text-gray-100 text-center py-2 absolute bottom-0 w-full">
        <p>&copy; {new Date().getFullYear()} EEPROM Polinema. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
