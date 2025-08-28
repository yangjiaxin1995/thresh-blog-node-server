import redis from "redis";
import { REDIS_CONF } from "../config/db.js";

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

// 连接数据库，启动之后立刻执行
(async () => {
  try {
    await redisClient.connect();
    console.log("redis connect success");
  } catch (err) {
    console.error("redis error", err);
  }
})();

const set = async (key, val) => {
  let objVal = typeof val === "object" ? JSON.stringify(val) : val;
  await redisClient.set(key, objVal);
};

const get = async (key) => {
  try {
    let val = await redisClient.get(key);
    if (val === null) return val;
    try {
      val = JSON.parse(val);
    } catch (error) {}
    return val;
  } catch (error) {
    throw new Error("get redis value error", error);
  }
};

export { set, get };
