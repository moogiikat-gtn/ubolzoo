import { coerceDate } from "@/utils/coerce_date";
import { object, string, boolean, optional, number, date } from "valibot";
import type { Output } from "valibot";

export const DataSchema = object({
  category: string(),
  title: string(),
  description: string(),
  img: string(),
  isNew: optional(boolean()),
  price: number(),
  date: coerceDate(),
});
export type DataSchema = Output<typeof DataSchema>;
