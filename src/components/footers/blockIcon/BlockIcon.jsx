import React from 'react'
import Github from "../../../images/github-mark-white.png"
import Mail from "../../../images/mail.svg"
import VK from "../../../images/vk.svg"
import Telegram from "../../../images/telegram.svg"
import { Link } from 'react-router-dom'
import s from "./BlockIcon.module.css"

export const BlockIcon = () => {
  return (
    <div className={s.iconBlock}>
      <Link
        to='https://github.com/NSobol/toys.git'
        target='_blank'
        className={s.linkicon}
      >
        <img className={s.phonepic} src={Github} alt='github' />
      </Link>
      <Link to='#' target='_blank' className={s.linkicon}>
        <img className={s.phonepic} src={VK} alt='vkontakte' />
      </Link>
      <Link to='#' target='_blank' className={s.linkicon}>
        <img className={s.phonepic} src={Telegram} alt='telega' />
      </Link>
      <Link to='#' target='_blank' className={s.linkicon}>
        <img className={s.phonepic} src={Mail} alt='pochta' />
      </Link>
    </div>
  );
}
