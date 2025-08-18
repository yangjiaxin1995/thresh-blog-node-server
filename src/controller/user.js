const loginCheck = (username, password) => {
  if (username === "thresh" && password === "123456") {
    return true;
  }
  return false;
};

export { loginCheck };
