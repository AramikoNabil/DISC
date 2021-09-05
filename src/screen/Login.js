import React, { useState } from "react";
import logo from "../images/logo.jpg";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../component/PreLoader";
import Axios from "axios";

// const Login = (props) => <LoginForm />;
const Login = () => {
  const [startDate, setStartDate] = useState("");
  const [isName, setName] = useState("");
  const [isEmail, setEmail] = useState("");
  const [isGender, setGender] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [regexp] = useState(/^[0-9\b]+$/);
  const [btn, setBtn] = useState(false);

  const Create = (props) => {
    if (isEmail !== "" && isName !== "" && isGender !== "") {
      setLoading(true);
      Axios.post("https://api-disc.herokuapp.com/api/usertest/create", {
        name: isName,
        email: isEmail,
        gender: isGender,
        birth_date: startDate,
      })
        .then((responseJson) => {
          console.log(responseJson.data.message);
          const api = responseJson.data;

          if (api) {
            if (api.message === "message.success") {
              setEmail("");
              setName("");
              setGender("");
              setStartDate("");
              Go_To();
              // setLoading(false);
            } else if (api.code === 400) {
              setEmail("");
              setName("");
              setGender("");
              setStartDate("");
              setLoading(false);
            }
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
    }
  };

  const Go_To = () => {
    setTimeout(() => {
      window.location = "/instruction";
    }, 3000);
  };
  console.log(startDate);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeGenderMale = (e) => {
    setGender((e.target.value = "laki-laki"));
  };
  const handleChangeGenderFemale = (e) => {
    setGender((e.target.value = "perempuan"));
  };

  const handleChangeDate = (e) => {
    if (startDate === "" || !regexp.test(startDate)) {
      setStartDate(e.target.value);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="wrp-inner">
      <div className="header">
        {/* <FormHeader title="Login" /> */}
        <div style={{ alignItems: "center", display: "flex" }}>
          <img src={logo} width="70" height="60" alt="icon" />
        </div>
      </div>
      <div className="row">
        <div className="label1">Nama Lengkap</div>

        <input
          value={isName}
          onChange={handleChangeName}
          placeholder="Enter your Full Name"
          type="text"
        />
        <div className="label2">Email</div>
        <input
          value={isEmail}
          onChange={handleChangeEmail}
          placeholder="Enter your Email"
          type="text"
        />
      </div>

      <div style={{ padding: 20, marginLeft: 30 }}>
        <div
          style={{
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
            // marginTop: 10,
            // marginBottom: 5,
          }}
        >
          <input
            type="radio"
            onChange={handleChangeGenderMale}
            id="html"
            name="fav_language"
            value={isGender}
          />
          <label for="Laki-Laki">Laki-Laki</label>
        </div>
        <div
          style={{
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <input
            type="radio"
            onChange={handleChangeGenderFemale}
            id="css"
            name="fav_language"
            value={isGender}
          />
          <label for="Perempuan">Perempuan</label>
        </div>

        <div style={{ marginTop: 10, marginBottom: 5 }}>Tanggal lahir:</div>
        <input
          value={startDate}
          onChange={(event) =>
            setStartDate(event.target.value.replace(/\D/, ""))
          }
          // onChange={handleChangeDate}
          placeholder="yyyy-mm-dd"
          type="text"
        />
        {/* <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        /> */}
      </div>
      <div className="button">
        <button onClick={Create} disabled={isLoading} className="row-button">
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
const FormHeader = (props) => <div className="header-title">{props.title}</div>;
