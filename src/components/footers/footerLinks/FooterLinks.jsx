import React from 'react';
import { Link } from 'react-router-dom';
import s from './footerLinks.module.css';

export const FooterLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/orus' className={s.linkone}>
            О нас
          </Link>
        </li>
        <li>
          <Link to='/questionsAndAnswers' className={s.linkone}>
            Вопрос - ответ
          </Link>
        </li>
        <li>
          <Link to='/profile' className={s.linkone}>
            Профиль пользователя
          </Link>
        </li>
      </ul>
    </div>
  );
};
