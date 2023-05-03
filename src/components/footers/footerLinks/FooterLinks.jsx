import React from 'react'
import { Link } from 'react-router-dom'
import "./Links.css"

export const FooterLinks = () => {
  return (
    <div>
      <ul>
        <li><Link to = "/orus" className='linkone'>О нас</Link></li>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}
