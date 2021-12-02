import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo192.png";
import bg from "../images/picBc.png";

const Home = (props) => {
  const routeChange = () => {
    let path = "/registration";
    props.history.push(path);
  };
  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner">
          <div className="header-logo">
            <img src={logo} width="90" height="110" alt="icon" />
          </div>
          <div className="header">
            <div className="header-title">Personality Test</div>
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
          <div className="button">
            <div className="row-button" onClick={routeChange}>
              Start
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
