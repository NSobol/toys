import React from 'react';
import s from './Footer.module.css';
import { Copyright } from '../copyright/Copyright.jsx';
import { FooterContent } from '../footerContent/FooterContent';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.content}>
        <FooterContent />
        <Copyright />
      </div>
    </div>
  );
};
export default Footer;
