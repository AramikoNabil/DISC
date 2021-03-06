import React from "react";
//import logo from "../images/logo.jpg";
import icon from "../images/google-drive-document.png";

const Instruction = (props) => {
  const routeChange = () => {
    let path = "/test";
    props.history.push(path);
  };
  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner-instruction">
          <div className="header-logo">
            <div className="header-title">DISC Test</div>
          </div>
          <div className="wrp-intruction">
            <div className="header-intruction">Ikuti Petunjuk </div>
            <div className="list">
              <img
                src={icon}
                width="20"
                height="20"
                alt="icon"
                style={{ display: "flex" }}
              />
              <p style={{ display: "flex", marginLeft: 10 }}>
                DISC personality test berisi 24 pertanyaan, setiap pertanyaan
                berisi dua pilihan.
              </p>
            </div>
            <div className="list">
              <img
                src={icon}
                width="20"
                height="20"
                alt="icon"
                style={{ display: "flex" }}
              />
              <p style={{ display: "flex", marginLeft: 10 }}>
                Geser ke kanan untuk pilihan yang menggambarkan dirimu (IYA) dan
                ke kiri untuk sebalikanya (TIDAK).
              </p>
            </div>
            <div className="list">
              <img
                src={icon}
                width="20"
                height="20"
                alt="icon"
                style={{ display: "flex" }}
              />
              <p style={{ display: "flex", marginLeft: 10 }}>
                Pastikan bahwa dalam menjawab seleruh pernyataan dengan berpikir
                bahwa Anda sedang dalam jabatan Anda saat ini. Bila tidak
                bekerja anggaplah Anda dalam pekerjaan terakhir Anda.
              </p>
            </div>
            <div className="list">
              <img
                src={icon}
                width="20"
                height="20"
                alt="icon"
                style={{ display: "flex" }}
              />
              <p style={{ display: "flex", marginLeft: 10 }}>
                Jadilah dirimu sendiri. Fokus pada bagaimana Anda sekarang bukan
                pada bagaimana Anda berharap atau berpikir ingin jadi seperti
                apa dimasa depan.
              </p>
            </div>
            <div className="list">
              <img
                src={icon}
                width="20"
                height="20"
                alt="icon"
                style={{ display: "flex" }}
              />
              <p style={{ display: "flex", marginLeft: 10 }}>
                BEKERJALAH DENGAN CEPAT.
              </p>
            </div>
          </div>
          <div className="button">
            <div className="row-button" onClick={routeChange}>
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
