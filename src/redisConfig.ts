import Redis from "ioredis";
import { promisify } from "util";

const redisClient = new Redis({
  host: "redis",
  port: 6379,
  password: "",
  db: 0,
});

function getRedis(key: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);

  return syncRedisGet(key);
}

function setRedis(key: string, value: string) {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  // @ts-ignore
  return syncRedisSet(key, value, "EX", 60 * 60);
}

function removeRedis(key: string) {
  const syncRedisDel = promisify(redisClient.del).bind(redisClient);

  return syncRedisDel(key);
}

export { getRedis, setRedis, removeRedis, redisClient };
