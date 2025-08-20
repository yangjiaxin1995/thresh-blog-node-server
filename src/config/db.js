const env = process.env.NODE_ENV; // 环境变量

// 配置
let MYSQL_CONF = null;

if (env === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "yjx1995621",
    port: "3306",
    database: "myblog",
  };
}

if (env === "production") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "yjx1995621",
    port: "3306",
    database: "myblog",
  };
}

export { MYSQL_CONF };
