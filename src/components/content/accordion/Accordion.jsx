import React from 'react';
import { AccordionItem } from '../accordionItem/AccordionItem';
import { accordionData } from '../../../constants/Constants';
import s from './accordion.module.css';

export const Accordion = () => {
  return (
    <div className={s.accordion}>
      {accordionData.map(({ title, content }) => (
        <AccordionItem title={title} content={content} />
      ))}
    </div>
  );
};
