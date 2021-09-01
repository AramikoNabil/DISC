import React, { useState } from "react";
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

// import ComplexListItem from "./ComplexListItem";
import ComplexSwipeContent from "./swipeContent";

const SizeToContent = () => {
  const [questions, setQuestions] = useState(() => [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { id: 1, answerText: "Pendiam, tidak banyak bicara", isDisable: false },
        {
          id: 1,
          answerText: "Berjuang mencapai hasil",
          isDisable: false,
        },
        {
          id: 1,
          answerText: "Mudah bergaul dengan orang baru",
          isDisable: false,
        },
        { id: 1, answerText: "Berusaha menyenangkan orang", isDisable: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { id: 1, answerText: "Jeff Bezos", isCorrect: false },
        { id: 1, answerText: "Elon Musk", isCorrect: true },
        { id: 1, answerText: "Bill Gates", isCorrect: false },
        { id: 1, answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { id: 1, answerText: "Apple", isCorrect: true },
        { id: 1, answerText: "Intel", isCorrect: false },
        { id: 1, answerText: "Amazon", isCorrect: false },
        { id: 1, answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { id: 1, answerText: "1", isCorrect: false },
        { id: 1, answerText: "4", isCorrect: false },
        { id: 1, answerText: "6", isCorrect: false },
        { id: 1, answerText: "7", isCorrect: true },
      ],
    },
  ]);

  //   let changeBg = questions.answerOption.id;

  //   console.log(changeBg + "INI DATAAA");

  const [currentQuestion] = useState(0);
  const [contentAnimation] = useState(ActionAnimations);
  const [isBg, setBg] = useState();

  //   const items = [
  //     { id: 1, text: "First" },
  //     { id: 2, text: "Second", description: "second description" },
  //     { id: 3, text: "Third", description: "third description" },
  //     { id: 4, text: "Fourth", description: "fourth description" },
  //     { id: 5, text: "Fifth", description: "fifth description" },
  //     { id: 6, text: "Sixth", description: "sixth description" },
  //     { id: 7, text: "Seventh", description: "seventh description" },
  //     { id: 8, text: "Eighth", description: "eighth description" },
  //     { id: 9, text: "Ninth", description: "ninth description" },
  //     { id: 10, text: "Tenth", description: "tenth description" },
  //     { id: 11, text: "Eleventh", description: "eleventh description" },
  //     { id: 12, text: "Twelfth", description: "twelfth description" },
  //   ];

  const swipeRightOptions = (index) => ({
    content: <ComplexSwipeContent position="left" />,
    actionAnimation: contentAnimation,
    action: () => changeColor(index),
  });

  const changeColor = (index) => {
    console.log("index === ", index);
    console.log("questions[currentQuestion].answerOptions[index].isDisable === ", questions[currentQuestion].answerOptions[index].isDisable);
    setQuestions(questions => [...questions, questions[currentQuestion].answerOptions[index].isDisable = true]);
  };

  const swipeLeftOptions = () => ({
    content: <ComplexSwipeContent position="right" />,
    // action: ,
  });

  return (
    <div className="size-to-content-swipeable-list__container">
      <SwipeableList>
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <SwipeableListItem
            key={index}
            swipeLeft={swipeLeftOptions()}
            swipeRight={swipeRightOptions(index)}
          >
            {/* <ComplexListItem description={description} name={text} /> */}
            <ComplexListItem
              name={answerOption.answerText}
              s={answerOption.isDisable
                ? "complex-swipeable-list__item"
                : "complex-swipeable-list__itemFalse"} />
          </SwipeableListItem>
        ))}
      </SwipeableList>
    </div>
  );
};

const ComplexListItem = (props) => (
  <div className={props.s}>
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

export default SizeToContent;
