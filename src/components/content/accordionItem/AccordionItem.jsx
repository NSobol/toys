import React from 'react';
import { ReactComponent as Arrow } from './../../../images/right_arrow.svg';
import { ReactComponent as Arrows } from './../../../images/right_arrow_rotated.svg';
import s from './accordionItem.module.css';

export const AccordionItem = ({ item, index, toggle, opened }) => {
  const isTitleActive = opened ? 'active' : 'accordionTitle';
  const isActive = opened ? 'content show' : 'content';

  return (
    <div className={s.accordionItem} key={item.title} onClick={toggle}>
      <div className={s[`${isTitleActive}`]}>
        <div className={s.icon}>
          {opened ? <Arrows /> : <Arrow />}
        </div>
        <h2 className={s.title}>{item.title}</h2>
      </div>
      <div className={s[`${isActive}`]}>{item.content}</div>
    </div>
  );
};
