import { object, string, boolean, optional } from "valibot";
import type { Output } from "valibot";

export const DataSchema = object({
  category: string(),
  title: string(),
  description: string(),
  img: string(),
  isNew: optional(boolean()),
});
export type DataSchema = Output<typeof DataSchema>;
