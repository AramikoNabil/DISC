import React, { useState } from "react";
import logo from "../images/logo192.png";
import Loading from "../component/PreLoader";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useStateWithCallbackLazy } from "use-state-with-callback";
import { register } from "../services/authService";

const Login = (props) => {
  const [isName, setName] = useStateWithCallbackLazy("");
  const [nameError, setErrorName] = useStateWithCallbackLazy("");
  const [nameErrorBool, setErrorNameBool] = useStateWithCallbackLazy(true);
  const [isEmail, setEmail] = useStateWithCallbackLazy("");
  const [errorEmail, setErrorEmail] = useStateWithCallbackLazy("");
  const [errorEmailBool, setErrorEmailBool] = useStateWithCallbackLazy(true);
  const [isLoading, setLoading] = useState(false);
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

  const Create = (e) => {
    if (errorEmailBool !== true && isName !== "") {
      setLoading(true);
      register(isName, isEmail)
        .then((responseJson) => {
          const api = responseJson;
          if (api) {
            if (api.status === "success") {
              localStorage.setItem("userId", api.user_id);
              localStorage.setItem("token", api.token);
              setEmail("");
              setName("");
              Go_To();
            }
          }
        })
        .catch((error) => {
          setEmail("");
          setName("");
          setError("Erro! Try again");
          setLoading(false);
          setOpen(true);
        });
    } else {
    }
  };

  const history = useHistory();
  const Go_To = () => {
    setTimeout(() => {
      let path = "/";
      history.push(path);
    }, 500);
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
          <div className="label2">Email*</div>

          <TextField
            autoComplete="off"
            error={errorEmailBool}
            value={isEmail}
            onChange={handleChangeEmail}
            helperText={errorEmail}
            onBeforeInput={handleChangeEmail}
          />
          <div className="label1">Password*</div>
          <TextField
            autoComplete="off"
            error={nameErrorBool}
            defaultValue={isName}
            helperText={nameError}
            onChange={handleChangeName}
          />
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
