import React, { useState } from 'react';
import s from './accordionItem.module.css';

export const AccordionItem = ({ title, content, active, index, activeIndex, handleClick}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordionItem}>
      <div className={s.accordionTitle} active={activeIndex === 0}
index={0}
onClick={handleClick} >
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={s.accordionContent}>{content}</div>}
    </div>
  );
};
