import React, { useState } from 'react';
import s from './accordionItem.module.css';

export const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordionItem}>
      <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={s.accordionContent}>{content}</div>}
    </div>
  );
};
