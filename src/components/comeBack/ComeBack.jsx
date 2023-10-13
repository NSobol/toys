import React from 'react';
import { useNavigate } from 'react-router';
import s from './ComeBack.module.css';

export const ComeBack = () => {
  const back = useNavigate();
  return (
    <span className={s.comeBackStyle} onClick={() => back(-1)}>
      {'<'} Назад
    </span>
  );
};
