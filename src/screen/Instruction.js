import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import icon from "../images/google-drive-document.png";

const Instruction = () => {
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
                Geser ke kiri untuk pilihan yang menggambarkan dirimu (IYA) dan
                ke kanan untuk sebalikanya (TIDAK).
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
          <Link to="/test" className="button">
            <button className="row-button">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Instruction;
