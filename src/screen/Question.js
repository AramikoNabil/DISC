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
        "Geser Kanan yang paling menggambarkan diri Anda, Geser Kiri yang paling tidak menggambarkan diri Anda :",
      answerOptions: [
        {
          id: 1,
          answerText: "Pendiam, tidak banyak bicara",
          isDisable: false,
          isDisable2: false,
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
        { answerText: " Mengajak, pemberi semangat", isDisable: false },
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
        { answerText: "Mau mengalah dengan sesama", isDisable: false },
        { answerText: "Peraturan itu membosankan", isDisable: false },
        { answerText: "Suka memaksa", isDisable: false },
        { answerText: "Memiliki standar yang tinggi", isDisable: false },
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
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Bertanggung jawab akan tugas", isDisable: false },
        { answerText: "Mudah mengekspresikan sesuatu", isDisable: false },
        { answerText: "Mudah ditebak, konsisten", isDisable: false },
        { answerText: "Selalu berhati-hati, waspada", isDisable: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Tidak mudah menyerahs", isDisable: false },
        { answerText: "Menjadi anggota kelompok", isDisable: false },
        { answerText: "Periang dan selalu ceria", isDisable: false },
        { answerText: "Semuanya teratur rapi", isDisable: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Senang mengarahkan, memimpin", isDisable: false },
        { answerText: "Mengendalikan diri", isDisable: false },
        { answerText: "Dapat membujuk orang lain", isDisable: false },
        { answerText: "Cara berpikirnya sistematis, logis", isDisable: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Tulus, tidak berprasangka buruk", isDisable: false },
        { answerText: "Ketawa lepas, tidak ditahan-tahan", isDisable: false },
        { answerText: "Berani, tegas", isDisable: false },
        { answerText: "Tenang, hati-hati, serius", isDisable: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Kemauan yang keras", isDisable: false },
        { answerText: "Suka dengan hal baru", isDisable: false },
        { answerText: "Menolak perubahan mendadak", isDisable: false },
        { answerText: "Mempersiapkan masa depan", isDisable: false },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Penyemangat yang baik", isDisable: false },
        { answerText: "Sabar mendengarkan pembicaraan", isDisable: false },
        { answerText: "Peraturan itu untuk keadilan", isDisable: false },
        {
          answerText: "Mandiri, tidak tergantung orang lain",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Suka menyenangkan orang lain", isDisable: false },
        { answerText: "Suka mengambil keputusan", isDisable: false },
        { answerText: "Bersemangat dan optimis", isDisable: false },
        {
          answerText: "Mengutamakan fakta, data",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Ramah, lemah lembut", isDisable: false },
        { answerText: "Berpikir positif, bersemangat", isDisable: false },
        { answerText: "Suka mengambil risiko", isDisable: false },
        {
          answerText: "Bekerja sesuai perintah",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "	Hati-hati, kontrol diri ketat", isDisable: false },
        { answerText: "Berkata sesuai yang dipikirkan", isDisable: false },
        { answerText: "Tidak mudah cemas akan sesuatu", isDisable: false },
        {
          answerText: "Jika berbelanja sesuai keinginan",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Ramah, mudah berteman", isDisable: false },
        { answerText: "Cepat bosan dengan hal-hal rutin", isDisable: false },
        { answerText: "Suka berubah-ubah", isDisable: false },
        {
          answerText: "Menginginkan kepastian",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Mengalah, menghindari konflik", isDisable: false },
        { answerText: "Hal-hal kecil menjadi perhatian", isDisable: false },
        { answerText: "Berubah pada saat-saat akhir", isDisable: false },
        {
          answerText: "Suka tantangan baru",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Pendiam tidak suka berbicara", isDisable: false },
        { answerText: "Riang, suka berbicara", isDisable: false },
        { answerText: "Cepat merasa puas", isDisable: false },
        {
          answerText: "Cepat memutuskan, tegas",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Mampu sabar dalam menunggu", isDisable: false },
        { answerText: "Menginginkan petunjuk yang jelas", isDisable: false },
        { answerText: "Suka bercanda", isDisable: false },
        {
          answerText: "Jika ada keinginan harus dipenuhi",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Peraturan itu menghambat", isDisable: false },
        { answerText: "Suka menganalisa sampai detil", isDisable: false },
        { answerText: "Unik, beda dengan yang lain", isDisable: false },
        {
          answerText: "Bisa diharapkan bantuannya",
          isDisable: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Barani mengambil risiko", isDisable: false },
        { answerText: "Menyenangkan, suka membantu", isDisable: false },
        { answerText: "Mudah mengemukakan perasaan", isDisable: false },
        {
          answerText: "Rendah hati, sederhana",
          isDisable: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "Mengutamakan hasil", isDisable: false },
        { answerText: "Menginginkan akurasi, ketepatan", isDisable: false },
        { answerText: "Betah berbicara lama", isDisable: false },
        {
          answerText: "Suka berkelompok, bersama-sama",
          isDisable: false,
        },
      ],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestion1, setCurrentQuestion1] = useState(0);
  const [isVer, setVer] = useState(false);
  const [isColor, setColor] = useState("white");

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

  const changeColor2 = (index, isDisable2) => {
    if (isDisable2) {
      questions[currentQuestion].answerOptions.map((data, _index) => {
        _index !== index ? (data.isDisable2 = false) : (data.isDisable2 = true);
      });
    }
    setQuestions((questions) => [
      ...questions,
      (questions[currentQuestion].answerOptions[index].isDisable2 = isDisable2),
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
          /24
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
                      {/* <ComplexListItem
                        description={answerOption.isDisable ? "+" : null}
                      /> */}
                      <ComplexListItem
                        name={answerOption.answerText}
                        s={
                          answerOption.isDisable == null
                            ? "complex-swipeable-list__itemFalse2"
                            : answerOption.isDisable === false
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
            {currentQuestion + 1 === 24 ? (
              <button
                // onClick={() => handleAnswerOptionClick()}
                disabled={!isVer}
                className="row-button"
              >
                Finish
              </button>
            ) : (
              <button
                onClick={() => handleAnswerOptionClick()}
                disabled={!isVer}
                className="row-button"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
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

export default Question;
