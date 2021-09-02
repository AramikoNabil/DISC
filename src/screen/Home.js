import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import bg from "../images/picBc.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
  const onSubmit = () => {};
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
          <div className="button">
            <div onClick={onOpenModal} className="row-button">
              Start
            </div>
          </div>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="form-div">
              <form onSubmit={onSubmit()}>
                <input placeholder="Nama Lengkapp" type="text" />
                <input placeholder="Email" type="text" />
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 10,
                    marginBottom: 5,
                  }}
                >
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="Laki-Laki"
                  />
                  <label for="Laki-Laki">Laki-Laki</label>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginBottom: 10,
                  }}
                >
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="Perempuan"
                  />
                  <label for="Perempuan">Perempuan</label>
                </div>

                <Link to="/instruction" className="button-submit">
                  <p>Temp : Submit saja, blm ada api </p>
                  <button className="row-button-submit">Submit</button>
                </Link>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default Home;
