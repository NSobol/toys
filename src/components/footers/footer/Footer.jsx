import React from 'react';
import './Footer.css';
import { Copyright } from '../copyright/Copyright.jsx';
import { FooterContent } from '../footerContent/FooterContent';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <FooterContent />
        <Copyright />
      </div>
    </div>
  );
};
export default Footer;
