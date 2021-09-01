import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import icon from "../images/google-drive-document.png";
import SwipeableButton from "../component/SwipeableButton";

const Question = (props) => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Pendiam, tidak banyak bicara", isCorrect: false },
        { answerText: "Berjuang mencapai hasil", isCorrect: false },
        { answerText: "Mudah bergaul dengan orang baru", isCorrect: true },
        { answerText: "Berusaha menyenangkan orang", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner-instruction">
          <div className="header">
            <div className="header-title">DISC Test</div>

            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={logo} width="70" height="60" alt="icon" />
            </div>
          </div>
          <div className="wrp-intruction">
            <div className="header-test">
              {questions[currentQuestion].questionText}
            </div>
            <SwipeableButton />

            {/* <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <SwipeableButton title={answerOption.answerText} />
              ))}
            </div> */}
          </div>
          <Link to="/instruction" className="button">
            <button className="row-button">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Question;
