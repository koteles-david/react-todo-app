import type { TypographyProps } from "@/types";
import { createElement } from "react";
export default function Typography({ children, type }: TypographyProps) {
  return (
    <>
      { createElement(type, {}, children) }
    </>
  )
}