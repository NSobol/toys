import React from 'react';
import { ReactComponent as SmileSad } from './../../images/sad.svg';

export const NotFound = () => {
  return (
    <div>
      <SmileSad />
      По Вашему запросу ничего не найдено <br />
      NOT FOUND 404
    </div>
  );
};
