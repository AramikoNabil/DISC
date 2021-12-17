export const urlApi = "https://202.157.186.156:90/rapid_tech/public/api";

var token = localStorage.getItem("token");
export const api = (method, path, body = null, file = null) => {
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
