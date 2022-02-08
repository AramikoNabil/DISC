import { api } from "../config";

export const getListDataUser = () => {
  return api("GET", "/all-user");
};
