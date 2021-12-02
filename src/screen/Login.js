import React, { useState } from "react";
import logo from "../images/logo192.png";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../component/PreLoader";
import Axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import moment from "moment";
import { register } from "../services/authService";

const Login = () => {
  const [isDate, setDate] = useState("");
  const [isName, setName] = useStateWithCallbackLazy("");
  const [nameError, setErrorName] = useStateWithCallbackLazy("");
  const [nameErrorBool, setErrorNameBool] = useStateWithCallbackLazy(true);
  const [isEmail, setEmail] = useStateWithCallbackLazy("");
  const [errorEmail, setErrorEmail] = useStateWithCallbackLazy("");
  const [errorEmailBool, setErrorEmailBool] = useStateWithCallbackLazy(true);
  const [isGender, setGender] = useStateWithCallbackLazy("");
  const [genderError, setErrorGender] = useStateWithCallbackLazy("");
  const [genderErrorBool, setErrorGenderBool] = useStateWithCallbackLazy(true);
  const [isLoading, setLoading] = useState(false);
  const [btn, setBtn] = useState(false);
  const [isError, setError] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleChangeEmail = (event) => {
    let regxp =
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(event.target.value.toString().trim(), (isEmail) => {
      if (isEmail.trim().length < 1) {
        setErrorEmail("Email is required.");
        setErrorEmailBool(true);
      } else if (!regxp.test(isEmail.trim())) {
        setErrorEmail("Email format is invalid.");
        setErrorEmailBool(true);
      } else {
        setErrorEmail("");
        setErrorEmailBool(false);
      }
    });
  };

  const handleChangeName = (event) => {
    setName(event.target.value.toString().trim(), (isName) => {
      if (isName.trim().length < 1) {
        setErrorName("Name is required.");
        setErrorNameBool(true);
      } else {
        setErrorName("");
        setErrorNameBool(false);
      }
    });
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value.toString().trim(), (isGender) => {
      if (isGender.trim().length < 1) {
        setErrorGender("Gender is required.");
        setErrorGenderBool(true);
      } else {
        setErrorGender("");
        setErrorGenderBool(false);
      }
    });
  };

  const handleChangeStartDate = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  const Create = (e) => {
    if (
      errorEmailBool !== true &&
      isName !== "" &&
      isGender !== "" &&
      isDate !== ""
    ) {
      setLoading(true);
      //register(isName, isEmail, isGender, isDate)
      Axios.post("http://26f6-158-140-191-58.ngrok.io/api/register", {
        name: isName,
        email: isEmail,
        gender: isGender,
        birthDate: isDate,
      })
        .then((responseJson) => {
          const api = responseJson;
          if (api) {
            if (api.status === "success") {
              localStorage.setItem("userId", api.user_id);
              localStorage.setItem("token", api.token);
              setEmail("");
              setName("");
              setGender("");
              setDate("");
              Go_To();
            }
          }
        })
        .catch((error) => {
          setEmail("");
          setName("");
          setGender("");
          setDate("");
          setError("Erro! Try again");
          setLoading(false);
          setOpen(true);
        });
    } else {
    }
  };

  const Go_To = () => {
    setTimeout(() => {
      window.location = "/instruction";
    }, 300);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="wrp-inner">
      <div className="wrp-login">
        <div className="header-logo-login">
          <div style={{ alignItems: "center", display: "flex" }}>
            <img src={logo} width="90" height="110" alt="icon" />
          </div>
        </div>
        <div noValidate autoComplete="off" className="row">
          <div className="label1">Nama Lengkap*</div>
          <TextField
            autoComplete="off"
            error={nameErrorBool}
            defaultValue={isName}
            helperText={nameError}
            onChange={handleChangeName}
          />
          <div className="label2">Email*</div>

          <TextField
            autoComplete="off"
            error={errorEmailBool}
            value={isEmail}
            onChange={handleChangeEmail}
            helperText={errorEmail}
            onBeforeInput={handleChangeEmail}
          />
        </div>

        <div className="gender">
          <div
            style={{
              alignItems: "center",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <FormControl sx={{ l: 1, minWidth: 120 }} size="small">
              <div className="label3">Gender*</div>
              <Select
                error={genderErrorBool}
                value={isGender}
                label="Gender"
                onChange={handleChangeGender}
              >
                <MenuItem value={"Laki-Laki"}>Laki-Laki</MenuItem>
                <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="datePick">
          <div className="label3">Tanggal lahir*</div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              value={isDate}
              onChange={handleChangeStartDate}
              inputFormat="yyyy-MM-dd"
              renderInput={(params) => <TextField disabled {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="button">
        <button onClick={Create} disabled={isLoading} className="row-button">
          Next
        </button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {isError}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};
export default Login;
