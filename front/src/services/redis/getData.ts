import { array, safeParse, any } from "valibot";
import { redisClient } from "./redis_client";
import { DataSchema } from "@/app/schemas/data";

export const getData = async () => {

//   await redisClient.json.set("news", "$", []);
  const response = await redisClient.json.get("data");

  const parsedData = safeParse(array(DataSchema), response);

  if (!parsedData.success) {
    throw Error("INVALID_REDIS_DATA");
  }

  return parsedData.output;
};
