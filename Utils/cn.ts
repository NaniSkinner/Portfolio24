import { clsx, type ClassValues } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValues[]) {
  return twMerge(clsx(inputs));
}
