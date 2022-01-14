import React, { useState, useEffect } from "react";
import logo from "../images/logo192.png";

const Result = (props) => {
  const data = [
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
    "dummyEmail@email.com",
    "testingdummy@email.com",
  ];
  const [emailResult] = useState(data);
  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner">
          <div className="header-logo">
            <img src={logo} width="90" height="110" alt="icon" />
          </div>
          <div className="header">
            <div className="header-title">Result Test</div>
          </div>
          <div className="wrp-intruction" style={{ marginTop: "20px" }}>
            {emailResult.map((value, index) => {
              return (
                <div className="listResult">
                  <p className="listEmail">{value}</p>
                  <p className="buttonPdf">
                    Download <br /> PDF
                  </p>
                </div>
              );
            })}
          </div>
          <div className="button"></div>
        </div>
      </div>
    </>
  );
};
export default Result;
