import React from 'react';
import { AccordionItem } from '../accordionItem/AccordionItem';
import { accordionData } from '../../../constants/Constants';
import s from './accordion.module.css';

export const Accordion = () => {
	const { selected, setSelected } = useState(null);;

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;

    setState({ activeIndex: newIndex });
  };

  return (
    <div className={s.accordion}>
      {accordionData.map(({ title, content, i, state }) => (
        <AccordionItem
          title={title}
          content={content}
          handleClick={handleClick}
          index={i}
          activeIndex={state}
        />
      ))}
    </div>
  );
};
