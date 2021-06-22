import React, { useState, useEffect } from "react";
import Start from "./Start";
import Question from "./Question";
import End from "./End";
import MyModal from "./MyModal";
import quizData from "../data/quiz.json";

let interval;

export default function Quizzes() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswerCheck={() => handleShow()}
          time={time}
        />
      )}
      {show && (
        <MyModal
          onClose={() => handleClose()}
          results={answers}
          data={quizData.data}
          showModal={show}
          closeWithButton={() => handleClose()}
        />
      )}
    </div>
  );
}
