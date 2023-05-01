import React from 'react';
import { useNavigate } from 'react-router';

export const ComeBack = () => {
  const back = useNavigate();
  return <span onClick={() => back(-1)}>{'<'} На главную</span>;
};
