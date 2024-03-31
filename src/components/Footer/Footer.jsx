import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            AULA is a Gaming Peripherals and Accessories brand packaged by
            Tarantula lab, which is a well-known game development studio in Hong
            Kong. AULA is known for the unique design of the product. Each
            product is designed by our engineers with cutting-edge technology
            and modern aesthetics.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              C/o ODIO ZONE PVT LTD, Agastya Complex, 2nd Floor, #S-4/63,
              Shettihalli Main Rd, Jalahalli West, Bengaluru, Karnataka 560015
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: (+91) 6364221123</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: support@aulaindia.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">AULA Mouse</span>
          <span className="text">AULA Mousepad</span>
          <span className="text">AULA Headset</span>
          <span className="text">AULA Speaker</span>
          <span className="text">AULA USB-C Hub</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            © 2023 AULA INDIA All rights reserved. Designed By BroSisSoft.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
