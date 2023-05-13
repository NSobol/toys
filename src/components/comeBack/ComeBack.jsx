import React from 'react';
import { useNavigate } from 'react-router';
import "./ComeBack.css"

export const ComeBack = () => {
  const back = useNavigate();
  return <span className='comeBackStyle' onClick={() => back(-1)}>{'<'} Назад</span>;
};
