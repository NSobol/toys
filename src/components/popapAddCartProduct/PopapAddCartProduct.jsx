import React from 'react';

export const PopapAddCartProduct = () => {
  return (
    <div class='create-edit-modal-form'>
      <h2 class='create-edit-modal-title'>Создание</h2>
      <form action='/target/' class='modal-form'>
        <label for='available'>Доступность</label> <br />
        <input type='checkbox' id='available' name='available' />
        <br />
        <label for='image'>Ссылка на изображение</label> <br />
        <input type='text' id='image' name='image' />
        <br />
        <label for='name'>Название товара</label> <br />
        <input id='name' name='name' type='text' required />
        <br />
        <label for='price'>Цена</label> <br />
        <input id='price' name='price' type='number' />
        <br />
        <label for='discount'>Скидка</label>
        <input id='discount' name='discount' type='number' />
        <br />
        <label for='stock'>Количество на складе</label>
        <input id='stock' name='stock' type='number' />
        <br />
        <label for='wight'>Единицы измерения</label> <br />
        <input id='wight' name='wight' type='text' />
        <br />
        <label for='description'>Описание товара</label> <br />
        <input id='description' name='description' type='text' required />
        <br />
      </form>
      <label for='token'>Токен:</label> <br />
      <input id='token' name='token' type='text' required />
      <button type='submit' class='button-form-submit'>
        Ok
      </button>
      <button type='reset' class='button-form-close'></button>
    </div>
  );
};
