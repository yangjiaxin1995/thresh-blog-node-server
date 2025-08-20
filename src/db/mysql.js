import mysql2 from "mysql2/promise";
import { MYSQL_CONF } from "../config/db.js";

// 创建连接池（Promise API）
const pool = mysql2.createPool(MYSQL_CONF);

// 统一执行 SQL 的函数（支持可选参数化）
const exec = async (sql, params = []) => {
  const [rows] = await pool.query(sql, params);
  return rows;
};

export { exec };
