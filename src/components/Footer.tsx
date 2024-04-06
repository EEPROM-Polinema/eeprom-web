import React from "react";
import "../styles/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>EEPROM</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="footer-section">
          <h2>Address</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.35203409994756!2d112.61450333613683!3d-7.945429583031798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883003dd47a6d%3A0x869957f7f4ec8059!2sEEPROM%20Polinema!5e0!3m2!1sen!2sid!4v1712394403548!5m2!1sen!2sid"
            width="225"
            height="225"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>

        <div className="footer-section">
          <h2>Menu</h2>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Article</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Contact us</h2>
          <ul>
            <li><a href="https://github.com/EEPROM-Polinema">GitHub</a></li>
            <li><a href="https://www.instagram.com/eeprom.polinema/">Instagram</a></li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} EEPROM Polinema. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
