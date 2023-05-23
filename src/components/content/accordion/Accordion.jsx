import React, { useState } from 'react';
import { accordionData } from '../../../constants/Constants';
import s from './accordion.module.css';
import { AccordionItem } from '../accordionItem/AccordionItem';

export const Accordion = () => {
  const [opened, setOpened] = useState(null);
  return (
    <div className={s.accordion}>
      {accordionData.map((item, i) => (
        <AccordionItem
          key={item.title}
          opened={i === opened}
          toggle={setOpened.bind(null, i === opened ? null : i)}
          item={item}
          index={i}
        />
      ))}
    </div>
  );
};
