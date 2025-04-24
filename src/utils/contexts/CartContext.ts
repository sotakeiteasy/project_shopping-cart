import { Product, SetCartType } from "@/utils/types";
import { createContext } from "react";

export const CartContext = createContext<{
  cart: Product[];
  setCart: SetCartType;
}>({
  cart: [],
  setCart: () => {},
});
