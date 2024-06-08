import { coerce, date } from "valibot";

export const coerceDate = () => {
  return coerce(date(), (value) => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      value instanceof Date
    ) {
      return new Date(value);
    }
  });
};
