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
          isDisable2: false,
        },
        {
          id: 3,
          answerText: "Mudah bergaul dengan orang baru",
          isDisable: false,
          isDisable2: false,
        },

        {
          id: 4,
          answerText: "Berusaha menyenangkan orang",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        {
          answerText: " Mengajak, pemberi semangat",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengutamakan kesempurnaan ",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengikuti pemimpin",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Keberhasilan adalah tujuan",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        {
          answerText: "Mudah kecewa, patah semangat",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Senang membantu sesama",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka bercerita tentang diri sendiri",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Memihak kepada oposisi  ",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Mengatur waktu secara efisien  ",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Buru-buru ingin cepat selesai   ",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Pandai bergaul, banyak teman  ",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengerjakan sampai selesai  ",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Menghindari konflik",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka membuat janji",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bekerja runtut, sesuai aturan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Berani menghadapi sesuatu",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Mau mengalah dengan sesama",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Peraturan itu membosankan",
          isDisable: false,
          isDisable2: false,
        },
        { answerText: "Suka memaksa", isDisable: false, isDisable2: false },
        {
          answerText: "Memiliki standar yang tinggi",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Bersemangat, aktif",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bekerja cepat, ingin menang",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengindari pertengkaran",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menyendiri jika stress",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Takut mengambil keputusan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Penghargaan akan kemenangan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Tenang, tidak terburu-buru",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bersahabat, dikenal banyak orang",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Bertanggung jawab akan tugas",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mudah mengekspresikan sesuatu",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mudah ditebak, konsisten",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Selalu berhati-hati, waspada",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Tidak mudah menyerahs",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menjadi anggota kelompok",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Periang dan selalu ceria",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Semuanya teratur rapi",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Senang mengarahkan, memimpin",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengendalikan diri",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Dapat membujuk orang lain",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Cara berpikirnya sistematis, logis",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Tulus, tidak berprasangka buruk",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Ketawa lepas, tidak ditahan-tahan",
          isDisable: false,
          isDisable2: false,
        },
        { answerText: "Berani, tegas", isDisable: false, isDisable2: false },
        {
          answerText: "Tenang, hati-hati, serius",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Kemauan yang keras",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka dengan hal baru",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menolak perubahan mendadak",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mempersiapkan masa depan",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Penyemangat yang baik",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Sabar mendengarkan pembicaraan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Peraturan itu untuk keadilan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mandiri, tidak tergantung orang lain",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Suka menyenangkan orang lain",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka mengambil keputusan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bersemangat dan optimis",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mengutamakan fakta, data",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Ramah, lemah lembut",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Berpikir positif, bersemangat",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka mengambil risiko",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bekerja sesuai perintah",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "	Hati-hati, kontrol diri ketat",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Berkata sesuai yang dipikirkan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Tidak mudah cemas akan sesuatu",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Jika berbelanja sesuai keinginan",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Ramah, mudah berteman",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Cepat bosan dengan hal-hal rutin",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka berubah-ubah",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menginginkan kepas",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Mengalah, menghindari konflik",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Hal-hal kecil menjadi perhatian",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Berubah pada saat-saat akhir",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka tantangan baru",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Pendiam tidak suka berbicara",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Riang, suka berbicara",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Cepat merasa puas",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Cepat memutuskan, tegas",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Mampu sabar dalam menunggu",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menginginkan petunjuk yang jelas",
          isDisable: false,
          isDisable2: false,
        },
        { answerText: "Suka bercanda", isDisable: false, isDisable2: false },
        {
          answerText: "Jika ada keinginan harus dipenuhi",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Peraturan itu menghambat",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka menganalisa sampai detil",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Unik, beda dengan yang lain",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Bisa diharapkan bantuannya",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Barani mengambil risiko",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menyenangkan, suka membantu",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Mudah mengemukakan perasaan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Rendah hati, sederhana",
          isDisable: false,
          isDisable2: false,
        },
      ],
    },

    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {
          answerText: "Mengutamakan hasil",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Menginginkan akurasi, ketepatan",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Betah berbicara lama",
          isDisable: false,
          isDisable2: false,
        },
        {
          answerText: "Suka berkelompok, bersama-sama",
          isDisable: false,
          isDisable2: false,
        },
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

    // setVer(true);
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
    action: () => changeColor2(index, true),
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
                        disable={
                          answerOption.isDisable !== false
                            ? "False"
                            : answerOption.isDisable2 !== false
                            ? "False2"
                            : "None"
                        }

                        // let a = {answerOption.isDisable === false ? disable ={"false"} : null }
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
