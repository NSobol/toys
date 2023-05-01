import React from 'react';
import { ReactComponent as SmileSad } from './../../images/sad.svg';
import { ComeBack } from '../comeBack/ComeBack';

export const NotFound = () => {
  return (
    <div>
      <ComeBack /> <br />
      <SmileSad />
      <p>По Вашему запросу ничего не найдено</p> <br />
      <p>NOT FOUND 404</p>
    </div>
  );
};
