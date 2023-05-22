import React, { useState } from "react";
import { AccordionItem } from "../accordionItem/AccordionItem";
import { accordionData } from "../../../constants/Constants";
import s from "./accordion.module.css";

export const Accordion = () => {
  const { state, setState } = useState({ activeIndex: 0 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } =state;
    const newIndex = activeIndex === index ? -1 : index;

    setState({ activeIndex: newIndex });
  };
  const { activeIndex } = state;

  return (
    <div className={s.accordion}>
      {accordionData.map(({ title, content }) => (
        <AccordionItem key={title} title={title} content={content} activeIndex={}/>
      ))}
    </div>
  );
};
