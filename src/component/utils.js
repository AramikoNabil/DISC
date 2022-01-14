export const isLogin = () => {
  if (localStorage.getItem("tokenAdmin")) {
    return true;
  }

  return false;
};
