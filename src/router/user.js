import { login } from "../controller/user.js";
import { SuccessModel, ErrorModel } from "../model/resModel.js";
import { set } from "../db/redis.js";

const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  // 登录
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then((loginData) => {
      if (loginData.username) {
        // 设置 session
        req.session.username = loginData.username;
        req.session.realname = loginData.realname;
        // 同步到 redis
        set(req.sessionId, req.session);
        return new SuccessModel(loginData);
      } else {
        return new ErrorModel("登录失败");
      }
    });
  }
};

export default handleUserRouter;
