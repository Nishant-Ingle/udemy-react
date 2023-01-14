import { createContext, useState } from "react";
import PRODUCTS from "../data/shop.json";

export const ProductContext = createContext({
  products: PRODUCTS,
});

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>
      { children }
    </ProductContext.Provider>
  );
};
