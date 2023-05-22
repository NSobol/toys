import React from 'react';
import s from './accordionItem.module.css';

export const AccordionItem = ({ item, index, toggle, opened }) => {
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';

  return (
    <div className={s.accordionItem} key={item.title} onClick={toggle}>
      <div className={s[`${isTitleActive}`]}>
        <div className={s.icon}>{opened === index ? '-' : '+'}</div>
        <h2 className={s.title}>{item.title}</h2>
      </div>
      <div className={s[`${isActive}`]}>{item.content}</div>
    </div>
  );
};
