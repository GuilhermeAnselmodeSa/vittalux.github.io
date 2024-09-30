import React from 'react';
import { FaInstagram, FaFacebook, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcDinersClub, FaLock, FaGoogle } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import { RiVisaFill } from "react-icons/ri";
import { MdPix, MdSecurity } from "react-icons/md";
import './footer.css';

function Footer() {
  return (
    <div className="footer-component-css">
      <div className="footer-icons">
        <div className="social-media-icons">
          <a href="https://www.instagram.com/vittalux.com.br?igsh=MTJweWR6eTA3N3Q5Zw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <FaFacebook className="footer-icon"/>
        </div>

        <div id="company-info">
          <p>VittaLux<br />
            Onde a beleza encontra cuidado<br />
            Escritório administrativo - Rua Orlando Sartorelli, 35, sala 02 - Iperó/Sp 18560000<br />
            CNPJ: 55.997.574/0001-78
          </p>
        </div>

        <div className="sac-info">
          <IoCallSharp />
          <p>+55 15 99171-3753</p>
          {/* <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDinersClub />
            <FaCcDiscover />
            <MdPix />
          </div> */}
        </div>
      </div>

      <div className="security-section">
        <div className="payment-security">
          <p>Formas de Pagamento</p>
          <div className="payment-methods">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDinersClub />
            <FaCcDiscover />
            <MdPix />
            {/* Add other payment icons here */}
          </div>
        </div>
        <div className="site-security">
          <p>Loja Segura</p>
          <div className="security-icons">
            <FaLock />
            <MdSecurity />
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
