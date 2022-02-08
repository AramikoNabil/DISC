import React, { useRef, useState, useEffect } from "react";
// Component
import logo from "../images/logo192.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getListDataUser } from "../services/fetchResult/getListDataUser";
import Loading from "../component/PreLoader";

// Package
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import ResultPDF from "../component/ResultPDF";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Result = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [listData, setListData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    setLoading(true);
    getListDataUser()
      .then((response) => {
        if (response !== null) {
          setListData(response);
          setLoading(false);
        }
      })
      .catch((error) => {});
  };

  const isMobile = width <= 768;
  const columns = [
    {
      name: "No.",

      options: {
        customBodyRender: (value, tableMeta, update) => {
          let rowIndex = Number(tableMeta.rowIndex) + 1;
          return <>{rowIndex}.</>;
        },
      },
    },
    {
      name: "name",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "birthDate",
      label: "Birth date",
    },
    {
      name: "gender",
      label: "Gender",
    },
    {
      name: "",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (isMobile) {
            return (
              <button className="buttonPdf" onClick={handleOpen}>
                Download PDF
              </button>
            );
          } else {
            return (
              <button className="buttonPdf" onClick={handleOpen}>
                Print PDF
              </button>
            );
          }
        },
      },
    },
  ];

  const handlePrint = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      // const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      // pdf.addImage(imgData, "PNG", 0, 0);
      // pdf.save("download.pdf");
      window.print();
    });
  };

  const handleDownload = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const datas = [
    ["", "Name", "dummyEmdffsdl@email.com", "02-01-2020"],
    ["", "Name1", "dummyEmail5@email.com", "02-01-2021"],
    ["", "Name2", "dummyEmail4@email.com", "02-01-2019"],
    ["", "Name3", "dummyEmail3@email.com", "02-01-2020"],
    ["", "Name4", "dummyEmail2@email.com", "02-01-2020"],
    ["", "Name5", "dummyEmail1@email.com", "02-01-2020"],
  ];

  const options = {
    filterType: "dropdown",
  };

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="wrp-outer">
        <div className="wrp-inner-result">
          <div className="header-result">
            <div className="header-logo-result">
              <img src={logo} width="90" height="110" alt="icon" />
            </div>
          </div>
          <div className="header-menu-result">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Menu
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
          <div className="wrapper-result">
            <div className="header-title-result">
              {/* <div className="header-text-result">Result Test</div> */}
            </div>

            <ThemeProvider theme={theme}>
              <MUIDataTable
                title={"Result DISC Test"}
                data={listData}
                columns={columns}
                options={{
                  selectableRows: false, // <===== will turn off checkboxes in rows
                }}
              />
            </ThemeProvider>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="capture">
                  <div className="header-logo-result">
                    <img src={logo} width="90" height="110" alt="icon" />
                  </div>
                  <div>Name : </div>
                  <div>Email : </div>
                  <div>Birth Date : </div>
                  <div>Gender : </div>
                </div>

                {isMobile ? (
                  <button id="printPageButton" onClick={handleDownload}>
                    Download
                  </button>
                ) : (
                  <button id="printPageButton" onClick={handlePrint}>
                    print
                  </button>
                )}
              </Box>
            </Modal>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
