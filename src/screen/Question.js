import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

// import ComplexListItem from "./ComplexListItem";
import ComplexSwipeContent from "../component/swipeContent";

const Question = (props) => {
  const [questions, setQuestions] = useState(() => [
    {
      questionText:
        "Pilih opsi yang menggambarkan diri Anda dan yang tidak menggambarkan diri Anda :",
      answerOptions: [
        {
          id: 1,
          answerText: "Pendiam, tidak banyak bicara",
          isDisable: false,
        },
        {
          id: 2,
          answerText: "Berjuang mencapai hasil",
          isDisable: false,
        },
        {
          id: 3,
          answerText: "Mudah bergaul dengan orang baru",
          isDisable: false,
        },
        { id: 4, answerText: "Berusaha menyenangkan orang", isDisable: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: " Mengajak, pemberi semangat ", isDisable: false },
        { answerText: "Mengutamakan kesempurnaan ", isDisable: false },
        { answerText: "Mengikuti pemimpin", isDisable: false },
        { answerText: "Keberhasilan adalah tujuan", isDisable: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Mudah kecewa, patah semangat", isDisable: false },
        { answerText: "Senang membantu sesama", isDisable: false },
        { answerText: "Suka bercerita tentang diri sendiri", isDisable: false },
        { answerText: "Memihak kepada oposisi  ", isDisable: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Mengatur waktu secara efisien  ", isDisable: false },
        { answerText: "Buru-buru ingin cepat selesai   ", isDisable: false },
        { answerText: "Pandai bergaul, banyak teman  ", isDisable: false },
        { answerText: "Mengerjakan sampai selesai  ", isDisable: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Menghindari konflik", isDisable: false },
        { answerText: "Suka membuat janji", isDisable: false },
        { answerText: "Bekerja runtut, sesuai aturan", isDisable: false },
        { answerText: "Berani menghadapi sesuatu", isDisable: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Bersemangat, aktif", isDisable: false },
        { answerText: "Bekerja cepat, ingin menang", isDisable: false },
        { answerText: "Mengindari pertengkaran", isDisable: false },
        { answerText: "Menyendiri jika stress", isDisable: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Takut mengambil keputusan", isDisable: false },
        { answerText: "Penghargaan akan kemenangan", isDisable: false },
        { answerText: "Tenang, tidak terburu-buru", isDisable: false },
        { answerText: "Bersahabat, dikenal banyak orang", isDisable: false },
      ],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [isVer, setVer] = useState(false);
  const [contentAnimation] = useState(ActionAnimations);

  const swipeRightOptions = (index) => ({
    content: <ComplexSwipeContent position="left" />,
    actionAnimation: contentAnimation,
    action: () => changeColor(index, true),
  });

  const changeColor = (index, isDisable) => {
    if (isDisable) {
      questions[currentQuestion].answerOptions.map((data, _index) => {
        _index !== index ? (data.isDisable = false) : (data.isDisable = true);
      });
    }
    setQuestions((questions) => [
      ...questions,
      (questions[currentQuestion].answerOptions[index].isDisable = isDisable),
    ]);
    setVer(true);
  };

  const swipeLeftOptions = (index) => ({
    content: <ComplexSwipeContent position="right" />,
    contentAnimation: contentAnimation,
    action: () => changeColor(index),
  });

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    setVer(false);
  };

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
          <span style={{ marginLeft: 30 }}>
            Pernyataan {currentQuestion + 1}
          </span>
          /{questions.length}
          <div className="wrp-intruction">
            <div className="header-test">
              {questions[currentQuestion1].questionText}
            </div>
            <div className="size-to-content-swipeable-list__container">
              <SwipeableList>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <SwipeableListItem
                      key={index}
                      swipeLeft={swipeLeftOptions(index)}
                      swipeRight={swipeRightOptions(index)}
                    >
                      <ComplexListItem
                        description={answerOption.isDisable ? "+" : null}
                      />
                      <ComplexListItem
                        name={answerOption.answerText}
                        s2={
                          answerOption.isDisable === false
                            ? "complex-swipeable-list__item"
                            : "complex-swipeable-list__itemFalse"
                        }
                      />
                    </SwipeableListItem>
                  )
                )}
              </SwipeableList>
            </div>
            {/* <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <SwipeableButton title={answerOption.answerText} />
              ))}
            </div> */}
          </div>
          <div className="button">
            <button
              onClick={() => handleAnswerOptionClick()}
              disabled={!isVer}
              className="row-button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ComplexListItem = (props) => (
  <div className={props.s2}>
    <div className="complex-swipeable-list__item-label">
      <span className="complex-swipeable-list__item-icon">{props.icon}</span>
      <span className="complex-swipeable-list__item-name">{props.name}</span>
    </div>
    {props.description && (
      <div className="complex-swipeable-list__item-description">
        {props.description}
      </div>
    )}
  </div>
);

export default Question;
