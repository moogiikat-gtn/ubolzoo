import { array, safeParse, any } from "valibot";
import { redisClient } from "./redis_client";
import { NewsSchema } from "@/app/schemas/news";

export const getNews = async () => {

//   await redisClient.json.set("news", "$", []);
  const response = await redisClient.json.get("news");

  const parsedData = safeParse(array(NewsSchema), response);

  if (!parsedData.success) {
    throw Error("INVALID_REDIS_DATA");
  }

  return parsedData.output;
};
