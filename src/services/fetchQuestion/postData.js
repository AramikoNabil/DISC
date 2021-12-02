import { api } from "../config";

export const sendAnswer = (userId, questionNumber, answer1, answer2) => {
  const body = {
    userId,
    questionNumber,
    answer1,
    answer2,
  };

  return api("POST", "/answer", body);
};

export const sendFinishAnswer = (userId, questionNumber, answer1, answer2) => {
  const body = {
    userId,
    questionNumber,
    answer1,
    answer2,
  };

  return api("POST", "/answer", body);
};
