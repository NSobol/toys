import React from 'react'
import './Footer.css'
import { Copyright } from '../copyright/Copyright.jsx'
import { FooterContent } from '../footerContent/FooterContent'

const Footer = () => {
  return (
    <div className='footer'>
      <FooterContent/>
      <Copyright />
     </div>
   )
}
export default Footer;