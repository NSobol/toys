import React from "react";
import { Accordion } from "../../components/content/accordion/Accordion";
import s from "./QAA.module.css"

export const QuestionsAndAnswers = () => {
  return (
    <>
      <div className={s.accordionContainer}>
        <Accordion />
      </div>
    </>
  );
};
