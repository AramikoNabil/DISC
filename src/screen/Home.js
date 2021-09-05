import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import bg from "../images/picBc.png";

const Home = () => {
  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner">
          <div className="header">
            <div className="header-title">Personality Test</div>
            <div style={{ alignItems: "center", display: "flex" }}>
              <img src={logo} width="70" height="60" alt="icon" />
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "auto",
              height: 400,
            }}
          >
            <img src={bg} alt="icon" className="bg" />
          </div>
          <Link to="/registration" className="button">
            <div className="row-button">Start</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
