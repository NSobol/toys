import React from 'react'
import phone from '../../../images/phone.png'
import './Phone.css'

export const Telephone = () => {
  return (
    <div className='phoneBlock'>
        <img className="phonepic" src={phone} alt="telephone" />
        <p className='numberPhone'>+79999999999</p>
    </div>
  )
}
