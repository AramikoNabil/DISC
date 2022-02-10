import { api } from "../config";

export const getDataChart = (userId) => {
  return api("GET", `/graph/${userId}`);
};
