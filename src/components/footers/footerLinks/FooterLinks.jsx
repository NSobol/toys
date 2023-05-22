import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

export const FooterLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/orus' className='linkone'>
            О нас
          </Link>
        </li>
        <li>
          <Link to='/questionsAndAnswers' className='linkone'>
            Вопрос - ответ
          </Link>
        </li>
        <li>
          <Link to='/profile' className='linkone'>
            Профиль пользователя
          </Link>
        </li>
      </ul>
    </div>
  );
};
