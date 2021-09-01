// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@material-ui/core";
import { withSnackbar } from "notistack";
import React from "react";
import { compose } from "recompose";
// import * as ROUTES from "../../constants/routes";
// import { LOGIN_AUTH } from "../../graphql";
import { withRedirectIfAuth } from "../../session";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as ROUTES from "../../constants/routes";
import * as storage from "../../storage";
import { LOGIN_AUTH, LOGIN_WITH_TWO_FACTOR } from "../../graphql";
import "../../assets/scss/style2.css";

const client = new ApolloClient({
  uri: "https://api.xtremex.io/",
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    },
    subscribe: {
      fetchPolicy: "cache-first",
      errorPolicy: "ignore",
    },
  },
});
const INITIAL_STATE = {
  email: "",
  password: "",
  code: "",
  error: "",
  errorEmail: "",
  errorPassword: "",
  errorCode: "",
  loading: false,
  twoFacAuth: false,
  datas: [],
};

// const ERROR_CODE_ACCOUNT_EXISTS =
//   "auth/account-exists-with-different-credential";

// const ERROR_MSG_ACCOUNT_EXISTS = `
//   An account with an EMail address to
//   this social account already exists. Try to login from
//   this account instead and associate your social accounts on
//   your personal account page.
// `;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.code = this.code.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loading = this.loading.bind(this);
  }
  email = (event) => {
    this.setState({ email: event.target.value.toString().trim() }, () => {
      this.validateEmail();
    });
  };

  validateEmail = () => {
    let regxp =
      /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.trim().length < 1) {
      this.setState({
        errorEmail: "Email is required.",
      });
    } else if (!regxp.test(this.state.email.trim())) {
      this.setState({
        errorEmail: "Email format is invalid.",
      });
    } else {
      this.setState({
        errorEmail: "",
      });
      return true;
    }
    return false;
  };

  password = (event) => {
    this.setState({ password: event.target.value.toString().trim() }, () => {
      this.validatePassword();
    });
  };
  code = (event) => {
    this.setState({ code: event.target.value.toString().trim() }, () => {
      this.validateCode();
    });
  };

  validatePassword = () => {
    if (this.state.password.trim().length < 1) {
      this.setState({
        errorPassword: "Password is required.",
      });
    } else if (this.state.password.trim().length < 6) {
      this.setState({
        errorPassword: "Password must be at least 6 characters.",
      });
    } else {
      this.setState({
        errorPassword: "",
      });
      return true;
    }
    return false;
  };
  validateCode = () => {
    if (this.state.code.trim().length < 1) {
      this.setState({
        errorCode: "Code is required.",
      });
    } else if (this.state.code.trim().length < 6) {
      this.setState({
        errorCode: "Code must be at least 6 characters.",
      });
    } else {
      this.setState({
        errorCode: "",
      });
      return true;
    }
    return false;
  };
  validate = () => {
    return this.validateEmail() && this.validatePassword();
  };
  validate2 = () => {
    return this.validateCode();
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!this.validate()) {
  //     return false;
  //   }
  //   this.loading(true);
  //   const { email, password } = this.state;
  //   var that = this;
  //   this.props.firebase
  //     .doSignInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       window.location = ROUTES.DASHBOARD;
  //     })
  //     .catch((error) => {
  //       that.loading(false);
  //       // console.log(error);
  //       that.setState({ error: error.message });
  //       this.props.enqueueSnackbar(error.message, {
  //         persist: true,
  //         variant: "error",
  //         anchorOrigin: {
  //           vertical: "bottom",
  //           horizontal: "center",
  //         },
  //       });
  //     });
  // };

  // withGoogle = (e) => {
  //   e.preventDefault();
  //   this.setState(() => ({
  //     error: "",
  //   }));
  //   this.loading(true);
  //   var that = this;
  //   this.props.firebase
  //     .doSignInWithGoogle()
  //     .then((socialAuthUser) => {
  //       window.location = ROUTES.DASHBOARD;
  //     })
  //     .catch((error) => {
  //       if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
  //         error.message = ERROR_MSG_ACCOUNT_EXISTS;
  //       }
  //       that.loading(false);
  //       // console.log(error);
  //       that.setState({
  //         error: error.message,
  //       });
  //       this.props.enqueueSnackbar(error.message, {
  //         persist: true,
  //         variant: "error",
  //         anchorOrigin: {
  //           vertical: "bottom",
  //           horizontal: "center",
  //         },
  //       });
  //     });
  // };

  loading = (status) => {
    this.setState({
      loading: status,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validate()) {
      return false;
    }
    this.loading(true);
    const { email, password } = this.state;
    var that = this;
    client
      .query({
        variables: { email: email, password: password },
        query: LOGIN_AUTH,
      })
      .then((result) => {
        console.log(result);
        this.loading(false);
        if (result.data.login_xtremex.status === true) {
          // if login success

          this.props.enqueueSnackbar("Login Success", {
            persist: true,
            variant: "success",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
          });

          this.setState({ datas: result.data.login_xtremex.data });
          storage.setAuthUser(result.data.login_xtremex.data);
          if (result.data.login_xtremex.data.is_setup_account === true) {
            // if account already fill up setup
            if (result.data.login_xtremex.data.is_2fa === true) {
              this.setState({ twoFacAuth: true });
              this.loading(false);
            } else {
              window.location = ROUTES.DASHBOARD;
            }
          } else if (
            result.data.login_xtremex.data.is_setup_account === false &&
            result.data.login_xtremex.data.is_2fa === true
          ) {
            this.loading(false);
            this.setState({ twoFacAuth: true });
          } else {
            window.location = ROUTES.DASHBOARD;
            this.loading(false);
          }
        } else {
          // if login failed
          that.setState({
            error: result.data.login_xtremex.message,
          });
          this.loading(false);
          this.props.enqueueSnackbar(result.data.login_xtremex.message, {
            persist: true,
            variant: "error",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
          });
        }
      })
      .catch((er) => {
        this.loading(false);
        console.log(er);
      });
  };
  handleSubmitCode = (e) => {
    e.preventDefault();
    if (!this.validate2()) {
      return false;
    }
    this.loading(true);
    const { code, datas } = this.state;
    // const d = {
    //   em: datas.email,
    //   key: datas.key_2fa,
    //   token: code,
    // };
    // console.log(d);
    client
      .query({
        variables: { email: datas.email, key: datas.key_2fa, token: code },
        query: LOGIN_WITH_TWO_FACTOR,
      })
      .then((result) => {
        if (result.data.login_verify_2fa.status === true) {
          localStorage.setItem(
            "data",
            JSON.stringify(result.data.login_verify_2fa.data)
          );
          storage.setAuthUser(result.data.login_verify_2fa.data);
          if (result.data.login_verify_2fa.data.is_setup_account === true) {
            window.location = ROUTES.DASHBOARD;
            this.props.enqueueSnackbar("Login Success", {
              persist: true,
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            });
          } else {
            window.location = ROUTES.SETUP;
            this.props.enqueueSnackbar("Login Success", {
              persist: true,
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            });
          }
        } else {
          this.setState({
            error: result.data.login_verify_2fa.message,
          });
          this.loading(false);
          this.props.enqueueSnackbar(result.data.login_verify_2fa.message, {
            persist: true,
            variant: "error",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
          });
        }
      });
  };
  // looog = () => {
  //   client
  //     .query({
  //       query: gql`
  //         query MyQuery {
  //           login_xtremex(email: "machoxz@gmail.com", password: "12345678") {
  //             status
  //             message
  //             data {
  //               id
  //               email
  //               name
  //               telegram
  //               is_2fa
  //               is_setup_account
  //               token
  //             }
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => {
  //       console.log(result.data);
  //     });
  // };
  trySendCode = () => {
    console.log("TRRRYYYYYY");
  };
  render() {
    // console.log("code =====" + this.state.code);
    return (
      <>
        <div className="auth-wrp">
          <div className="box-single">
            {this.state.twoFacAuth ? (
              <h2 className="title title-forgot">Two Factor Auth</h2>
            ) : (
              <h2 className="title">Sign In</h2>
            )}

            <form
              className="auth-form-wrp"
              onSubmit={
                this.state.twoFacAuth
                  ? this.handleSubmitCode
                  : this.handleSubmit
              }
              noValidate
              autoComplete="off"
            >
              {this.state.twoFacAuth ? (
                <p className="description2">
                  Input the code authentication
                  {/* <Link
                    className="text-link"
                    style={{ color: "#52c786" }}
                    to={() => this.trySendCode()}
                  >
                    {" "}
                    Re-send the code ?
                  </Link> */}
                </p>
              ) : (
                <div className="form-group">
                  <TextField
                    error={this.state.errorEmail ? true : false}
                    id="email"
                    type="email"
                    className="input is-fullwidth"
                    disabled={this.state.loading}
                    value={this.state.email}
                    label="Your email"
                    onChange={this.email}
                    helperText={this.state.errorEmail}
                  />
                </div>
              )}
              {this.state.twoFacAuth ? (
                <div className="form-group">
                  <TextField
                    error={this.state.errorCode ? true : false}
                    id="code"
                    type="password"
                    className="input is-fullwidth"
                    disabled={this.state.loading}
                    value={this.state.code}
                    label="Code Authentication"
                    onChange={this.code}
                    helperText={this.state.errorCode}
                  />
                </div>
              ) : (
                <div className="form-group">
                  <TextField
                    error={this.state.errorPassword ? true : false}
                    id="password"
                    type="password"
                    className="input is-fullwidth"
                    disabled={this.state.loading}
                    value={this.state.password}
                    label="Password"
                    onChange={this.password}
                    helperText={this.state.errorPassword}
                  />
                </div>
              )}
              <Button
                disabled={this.state.loading}
                type="submit"
                className="button btn-block is-primary btn-login"
              >
                {this.state.loading ? "LOGGING IN..." : "LOG IN"}
              </Button>
            </form>
            {/* <Button
              onClick={this.withGoogle}
              className="button btn-block is-secondary btn-auth-lastchild"
            >
              <FontAwesomeIcon className="icon-social" icon={faGoogle} />
              Log in with Google
            </Button> */}
          </div>
        </div>
      </>
    );
  }
}
const condition = (authUser) => !!authUser;

export default compose(withSnackbar, withRedirectIfAuth(condition))(SignIn);
