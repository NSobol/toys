import React from 'react'
import { Link } from 'react-router-dom'
import "./Links.css"

export const FooterLinks = () => {
  return (
    <div>
      <ul>
        <li><Link to = "/orus" className='linkone'>О нас</Link></li>
        <li>1</li>
        <li><Link to = "/profile" className='linkone'>Профиль пользователя</Link></li>
      </ul>
    </div>
  )
}
