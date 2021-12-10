import { urlApi } from "./config";

export const api = (method, path, body = null, file = null) => {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  !file && headers.append("Content-Type", "application/json");

  const data = fetch(urlApi + path, {
    method: method,
    headers: headers,
    body: method === "GET" ? null : file ? body : JSON.stringify(body),
  })
    .then((response) => response.json())

    .catch((e) => {});

  return data;
};

export const register = (name, email, gender, birthDate) => {
  const body = {
    name,
    email,
    gender,
    birthDate,
  };

  return api("POST", "/register", body);
};
