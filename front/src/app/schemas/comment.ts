import { object, string, boolean, optional, number, date } from "valibot";
import type { Output } from "valibot";

export const CommentSchema = object({
  author: string(),
  comment: string(),
});
export type CommentSchema = Output<typeof CommentSchema>;
