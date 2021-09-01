import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import bg from "../images/picBc.png";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      isError: true,
    };
  }

  // getProduct = async () => {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   try {
  //     const response = await Axios.get(
  //       "https://mini-project-c.herokuapp.com/api/product"
  //     );
  //     console.log(response.data.data);
  //     this.setState({
  //       isError: false,
  //       isLoading: false,
  //       data: response.data.data,
  //     });
  //   } catch (error) {
  //     this.setState({ isLoading: false, isError: true });
  //   }
  // };
  render() {
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
            <Link to="/instruction" className="button">
              <button className="row-button">Start</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
