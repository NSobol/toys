import React from 'react';
import './registrStyle.css';

export const Registr = (props) => {
  return (
    <div className='form'>
      <h2>Регистрация</h2>
      <form>
        <label> Ваше имя: </label> <br />
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Ваше имя'
          required
        />
        <br />
        <label> Ваш email: </label> <br />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Ваш email'
          required
        />
        <br />
        <label> Пароль: </label> <br />
        <input type='password' id='password' name='password' required />
        <br />
        <label> О себе: </label> <br />
        <input type='text' id='about' name='about' required />
        <br />
        <p className='hidden'>group-12</p>
        <input type='submit' />
        <input type='reset' />
      </form>
    </div>
  );
};
