import React from 'react';
import { FooterLinks } from '../footerLinks/FooterLinks';
import { FooterContact } from '../footerContacts/FooterContact';
import './Content.css'

export const FooterContent = () => {
  return (
    <div className='content'>
        <FooterLinks/>
        <FooterContact/>
    </div>
  )
}
