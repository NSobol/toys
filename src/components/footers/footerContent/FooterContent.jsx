import React from 'react';
import { FooterLinks } from '../footerLinks/FooterLinks';
import { FooterContact } from '../footerContacts/FooterContact';
import s from './footerContent.module.css';

export const FooterContent = () => {
  return (
    <div className={s.content}>
      <FooterLinks />
      <FooterContact />
    </div>
  );
};
