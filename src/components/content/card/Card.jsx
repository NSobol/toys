import React from 'react'
import { ReactComponent as Like } from '../../../images/like.svg'

export const Card = ({props}) => {
  
  return (
    <div class='create-edit-modal-form'>
     
        <img src="https://raw.githubusercontent.com/MerkucioZemba/Pictures/main/images/ufo.jpg" alt="картинка" />
        <br />
        <p>НЛО</p>
        <br />
        <p>1300р</p>
        <br />
     
      <button class='button'>Купить</button>
    </div>
  )
}
