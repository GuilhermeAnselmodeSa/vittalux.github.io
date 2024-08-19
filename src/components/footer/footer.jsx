import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { MdPix } from "react-icons/md";

import './footer.css';
function Footer() {
  return (
    <div className="footer-component-css">
    
      <div className="footer-icons">
        <a href="https://www.instagram.com/vittalux.com.br?igsh=MTJweWR6eTA3N3Q5Zw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <div className="sac-info">
        <IoCallSharp />
        <p>+55 15 99171-3753</p>
      
        <RiVisaFill/>
        <FaCcMastercard/>
        <MdPix/>
        </div>
      </div>
      <p id='directResponse'>Todos os Direitos Reservados</p>
    </div>
  )
}

export default Footer
