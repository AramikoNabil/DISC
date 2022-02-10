import { urlApi } from "../config";

export const api = (method, path, body = null, file = null) => {
  var token = localStorage.getItem("tokenAdmin");
  const headers = new Headers();
  headers.append("Accept", "application/json");
  !file && headers.append("Content-Type", "application/json");

  token !== null && headers.append("Authorization", "Bearer " + token);

  const data = fetch(urlApi + path, {
    method: method,
    headers: headers,
    body: method === "GET" ? null : file ? body : JSON.stringify(body),
  })
    .then((response) => response.json())

    .catch((e) => {});

  return data;
};

export const getDataChart = (userId) => {
  return api("GET", `/graph/${userId}`);
};

export const getListDataUser = () => {
  return api("GET", "/all-user");
};
