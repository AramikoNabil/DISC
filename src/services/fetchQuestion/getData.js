import { api } from "../config";

export const getAllQuestion = () => {
  return api("GET", "/questions");
};
