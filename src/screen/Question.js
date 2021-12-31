import React, { useState, useEffect } from "react";
import {
  ActionAnimations,
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import ComplexSwipeContent from "../component/swipeContent";
import Loading from "../component/PreLoader";
import CircularProgress from "@mui/material/CircularProgress";
import { sendAnswer } from "../services/fetchQuestion/postData";
import { sendFinishAnswer } from "../services/fetchQuestion/postData";
import { getAllQuestion } from "../services/fetchQuestion/getData";

const Question = (props) => {
  var userId = localStorage.getItem("userId");
  const [questions] = useState(
    "Geser Kanan yang paling menggambarkan diri Anda, Geser Kiri yang paling tidak menggambarkan diri Anda :"
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [user] = useState(userId);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingLogo, setLoadingLogo] = useState(false);
  const [isVer, setVer] = useState(false);
  const [contentAnimation] = useState(ActionAnimations);
  const [dataQuestion, setDataQuestion] = useState([]);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    if (answer1 !== "" && answer2 !== "") {
      setVer(true);
    }
  }, [answer1, answer2]);

  const getQuestion = async () => {
    setLoadingLogo(true);
    getAllQuestion()
      .then((response) => {
        if (response !== null) {
          setDataQuestion(response);
          setLoadingLogo(false);
        }
      })
      .catch((error) => {});
  };

  const swipeRightOptions = (index) => ({
    content: <ComplexSwipeContent position="left" />,
    actionAnimation: contentAnimation,
    action: () => changeColor(index, true),
  });

  const changeColor = (index, swipeRight) => {
    if (swipeRight) {
      dataQuestion[currentQuestion].question.map((data, _index) => {
        _index !== index ? (data.swipeRight = false) : (data.swipeRight = true);
      });
    }
    setDataQuestion((dataQuestion) => [
      ...dataQuestion,
      (dataQuestion[currentQuestion].question[index].swipeRight = swipeRight),
    ]);

    setAnswer1(dataQuestion[currentQuestion].question[index].me);
  };

  const changeColor2 = (index, swipeLeft) => {
    if (swipeLeft) {
      dataQuestion[currentQuestion].question.map((data, _index) => {
        _index !== index ? (data.swipeLeft = false) : (data.swipeLeft = true);
      });
    }
    setDataQuestion((dataQuestion) => [
      ...dataQuestion,
      (dataQuestion[currentQuestion].question[index].swipeLeft = swipeLeft),
    ]);

    setAnswer2(dataQuestion[currentQuestion].question[index].not_me);
  };

  const swipeLeftOptions = (index) => ({
    content: <ComplexSwipeContent position="right" />,
    contentAnimation: contentAnimation,
    action: () => changeColor2(index, true),
  });

  const handleAnswerOptionClick = () => {
    if (answer1 !== "" && answer2 !== "") {
      setLoading(true);
      sendAnswer(user, currentQuestion + 1, answer1, answer2)
        .then((responseJson) => {
          const api = responseJson;
          if (api) {
            if (api.status === "success") {
              setAnswer1("");
              setAnswer2("");
              const nextQuestion = currentQuestion + 1;
              if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
              }
              setLoading(false);
              setVer(false);
            }
          }
        })
        .catch((error) => {
          setAnswer1("");
          setAnswer2("");
          setLoading(false);
          setVer(false);
        });
    }
  };

  const handleAnswerFinishClick = () => {
    if (answer1 !== "" && answer2 !== "") {
      setLoading(true);
      sendFinishAnswer(user, currentQuestion + 1, answer1, answer2)
        .then((responseJson) => {
          const api = responseJson;
          if (api) {
            if (api.status === "success") {
              setAnswer1("");
              setAnswer2("");
              setLoading(false);
              setLoadingLogo(true);
              localStorage.clear();
              let path = "/finish";
              props.history.push(path);
              setLoadingLogo(false);
              setVer(false);
            }
          }
        })
        .catch((error) => {
          setAnswer1("");
          setAnswer2("");
          setLoading(false);
          setVer(false);
        });
    }
  };

  if (isLoadingLogo) {
    return <Loading />;
  }

  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner-instruction">
          <div className="header-logo">
            <div className="header-title">DISC Test</div>
          </div>
          <span style={{ marginLeft: 30 }}>
            Pernyataan {currentQuestion + 1}
          </span>
          /24
          <div className="wrp-intruction">
            <div className="header-test">{questions}</div>
            <div className="size-to-content-swipeable-list__container">
              <SwipeableList>
                {dataQuestion[currentQuestion]?.question.map(
                  (answerOption, index) => (
                    <SwipeableListItem
                      key={index}
                      swipeLeft={swipeLeftOptions(index)}
                      swipeRight={swipeRightOptions(index)}
                    >
                      <ComplexListItem
                        name={answerOption.text}
                        disable={
                          answerOption.swipeRight !== false
                            ? "False"
                            : answerOption.swipeLeft !== false
                            ? "False2"
                            : "None"
                        }
                      />
                    </SwipeableListItem>
                  )
                )}
              </SwipeableList>
            </div>
          </div>
          <div className="button">
            {currentQuestion + 1 === 24 ? (
              <button
                onClick={() => handleAnswerFinishClick()}
                disabled={!isVer}
                className="row-button"
              >
                {isLoading === false ? (
                  "Finish"
                ) : (
                  <CircularProgress size={20} />
                )}
              </button>
            ) : (
              <button
                onClick={() => handleAnswerOptionClick()}
                disabled={!isVer}
                className="row-button"
              >
                {isLoading === false ? "Next" : <CircularProgress size={20} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const ComplexListItem = (props) => (
  <div className={`complex-swipeable-list__item-${props.disable}`}>
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
