import React, { useRef, useState, useEffect } from "react";
// Component
import logo from "../images/logo192.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getListDataUser } from "../services/fetchResult/getListDataUser";
import { getDataChart } from "../services/fetchResult/getDataChart";
import Loading from "../component/PreLoader";

// Package
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Result = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [listData, setListData] = useState([]);
  const [dataGraph1, setDataGraph1] = useState();
  const [dataGraph2, setDataGraph2] = useState();
  const [dataGraph3, setDataGraph3] = useState();
  const [dataGraphMax1, setDataMax1] = useState();
  const [dataGraphMax2, setDataMax2] = useState();
  const [dataGraphMax3, setDataMax3] = useState();
  const [dataGraphTotal1, setDataTotal1] = useState();
  const [dataGraphTotal2, setDataTotal2] = useState();
  const [dataGraphTotal3, setDataTotal3] = useState();
  const [dataUserChart, setDataUserChart] = useState([]);
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

  const getData = (e, dataUser) => {
    handleOpen();
    setDataUserChart(dataUser);
    // setLoading(true);
    // if (dataUser !== []) {
    //   setDataUserChart(dataUser);
    //   getDataChart(dataUser[0])
    //     .then((response) => {
    //       if (response !== null) {
    //         setDataGraph1(response.graph[0].result);
    //         setDataGraph2(response.graph[1].result);
    //         setDataGraph3(response.graph[2].result);
    //         setDataMax1(response.max[0].value);
    //         setDataMax2(response.max[1].value);
    //         setDataMax3(response.max[2].value);
    //         setDataTotal1(response.graph[0].total);
    //         setDataTotal2(response.graph[1].total);
    //         setDataTotal3(response.graph[2].total);
    //         setLoading(false);
    //         handleOpen();
    //       }
    //     })
    //     .catch((error) => {});
    // } else {
    //   setLoading(false);
    // }
  };

  const isMobile = width <= 768;
  const columns = [
    {
      name: "id",
      label: "No.",

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
              <button
                className="buttonPdf"
                onClick={(e) => {
                  getData(e, tableMeta.rowData);
                }}
              >
                Result
              </button>
            );
          } else {
            return (
              <button
                className="buttonPdf"
                onClick={(e) => {
                  getData(e, tableMeta.rowData);
                }}
              >
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

  const graph1 = [
    {
      name: "D",
      D: dataGraph1?.C,
    },
    {
      name: "I",
      I: dataGraph1?.I,
    },
    {
      name: "S",
      S: dataGraph1?.S,
    },
    {
      name: "C",
      C: dataGraph1?.C,
    },
  ];
  const graph2 = [
    {
      name: "D",
      D: dataGraph2?.D,
    },
    {
      name: "I",
      I: dataGraph2?.I,
    },
    {
      name: "S",
      S: dataGraph2?.S,
    },
    {
      name: "C",
      C: dataGraph2?.C,
    },
  ];
  const graph3 = [
    {
      name: "D",
      D: dataGraph3?.D,
    },
    {
      name: "I",
      I: dataGraph3?.I,
    },
    {
      name: "S",
      S: dataGraph3?.S,
    },
    {
      name: "C",
      C: dataGraph3?.C,
    },
  ];

  function createData(Answer, calories, fat, carbs, protein) {
    return { Answer, calories, fat, carbs, protein };
  }

  const rows = [
    createData("X", dataGraph1?.D, "-", dataGraph2?.D, dataGraph3?.D),
    createData("Y", dataGraph1?.I, "-", dataGraph2?.I, dataGraph3?.I),
    createData("Z", dataGraph1?.S, "-", dataGraph2?.S, dataGraph3?.S),
    createData("R", dataGraph1?.C, "-", dataGraph2?.C, dataGraph3?.C),
    createData("+", dataGraph1?.NA, "-", dataGraph2?.NA, dataGraph3?.NA),
    createData("TOTAL", dataGraphTotal1, "", dataGraphTotal2, dataGraphTotal3),
  ];

  function createData2(Answer, calories, fat, carbs, protein, graph3) {
    return { Answer, calories, fat, carbs, protein, graph3 };
  }

  const rows1 = [
    createData2(dataGraph1?.D, "D", dataGraph2?.D, "D", dataGraph3?.D, "D"),
    createData2(dataGraph1?.I, "I", dataGraph2?.I, "I", dataGraph3?.I, "I"),
    createData2(dataGraph1?.S, "S", dataGraph2?.S, "S", dataGraph3?.S, "S"),
    createData2(dataGraph1?.C, "C", dataGraph2?.C, "C", dataGraph3?.C, "C"),
  ];
  function createData3(Answer, calories, fat) {
    return { Answer, calories, fat };
  }

  const rows2 = [
    createData3("GRAPH 1", "GRAPH 2", "GRAPH 3"),
    createData3(dataGraphMax1, dataGraphMax2, dataGraphMax3),
  ];

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
    top: "94%",
    // marginTop: "600px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const mobileStyle = {
    position: "absolute",
    top: "90%",
    marginTop: "100px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const graphStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "18px",
  };

  const mobileGraphStyle = {
    flexDirection: "coloumn",
    marginTop: "20px",
  };

  const modalStyle = {
    display: "block",
    overflow: "auto",
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
                // data={listData}
                data={datas}
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
              sx={modalStyle}
            >
              <div>
                <Box sx={isMobile ? mobileStyle : style}>
                  <div id="capture">
                    <div className="header-logo-modal">
                      <img src={logo} width="90" height="110" alt="icon" />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <div>
                        Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                        {dataUserChart[1]}
                      </div>
                      <div>
                        Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                        {dataUserChart[2]}{" "}
                      </div>
                      <div>Birth Date : {dataUserChart[3]} </div>
                      <div>
                        Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {dataUserChart[4]}{" "}
                      </div>
                    </div>
                    <hr
                      style={{
                        borderColor: "#000000",
                      }}
                    />

                    <div style={isMobile ? mobileGraphStyle : graphStyle}>
                      <TableContainer>
                        <Table
                          sx={{ maxWidth: 300, marginTop: "28px" }}
                          size="small"
                          aria-label="a dense table"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>&nbsp;</TableCell>
                              <TableCell align="right">+</TableCell>
                              <TableCell align="right">&nbsp;</TableCell>
                              <TableCell align="right">-</TableCell>
                              <TableCell align="right">Balance</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.Answer}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                  {row.protein}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <div>
                        <p style={{ fontWeight: "bold", textAlign: "center" }}>
                          GRAPH 1
                        </p>
                        <BarChart
                          width={300}
                          height={200}
                          data={graph1}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />

                          <Legend />
                          <Bar
                            dataKey="D"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="I"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="S"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="C"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                        </BarChart>
                      </div>
                    </div>

                    <div style={isMobile ? mobileGraphStyle : graphStyle}>
                      <TableContainer>
                        <Table
                          sx={{ maxWidth: 300, marginTop: "28px" }}
                          size="small"
                          aria-label="a dense table"
                        >
                          <TableBody>
                            {rows1.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {row.Answer}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                  {row.protein}
                                </TableCell>
                                <TableCell align="right">
                                  {row.graph3}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <div>
                        <p style={{ fontWeight: "bold", textAlign: "center" }}>
                          GRAPH 2
                        </p>
                        <BarChart
                          width={300}
                          height={200}
                          data={graph2}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />

                          <Legend />
                          <Bar
                            dataKey="D"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="I"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="S"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="C"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                        </BarChart>
                      </div>
                    </div>
                    <div style={isMobile ? mobileGraphStyle : graphStyle}>
                      <TableContainer>
                        <Table
                          sx={{ maxWidth: 300, marginTop: "28px" }}
                          size="small"
                          aria-label="a dense table"
                        >
                          <TableBody>
                            {rows2.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell align="right">
                                  {row.Answer}
                                </TableCell>
                                <TableCell align="right">
                                  {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <div>
                        <p style={{ fontWeight: "bold", textAlign: "center" }}>
                          GRAPH 3
                        </p>
                        <BarChart
                          width={300}
                          height={200}
                          data={graph3}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />

                          <Legend />
                          <Bar
                            dataKey="D"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="I"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="S"
                            fill="#8884d8"
                            label={{ position: "middle" }}
                          />
                          <Bar
                            dataKey="C"
                            fill="#82ca9d"
                            label={{ position: "middle" }}
                          />
                        </BarChart>
                      </div>
                    </div>
                  </div>

                  {isMobile ? (
                    <div className="button"></div>
                  ) : (
                    <div className="button">
                      <button
                        id="printPageButton"
                        onClick={handlePrint}
                        className="row-button-result"
                      >
                        Print
                      </button>
                    </div>
                  )}
                </Box>
              </div>
            </Modal>
            <div className="button"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Result;
