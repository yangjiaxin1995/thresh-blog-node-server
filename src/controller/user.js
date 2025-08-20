import { exec } from "../db/mysql.js";

const loginCheck = async (username, password) => {
  const sql = `select username, realname from users where username='${username}' and password='${password}'`;
  const rows = await exec(sql);
  return rows[0] || {};
};

export { loginCheck };
