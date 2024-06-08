import {
    object,
    string,
    boolean,
    optional,
  } from "valibot";
  import type { Output } from "valibot";
  
  export const NewsSchema = object({
    title: string(),
    description: string(),
    img: string(),
    isNew: optional(boolean()),
  });
  export type NewsSchema = Output<typeof NewsSchema>;
  