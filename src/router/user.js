import { loginCheck } from "../controller/user.js";
import { SuccessModel, ErrorModel } from "../model/resModel.js";

const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  // 登录
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("登录失败");
  }
};

export default handleUserRouter;
