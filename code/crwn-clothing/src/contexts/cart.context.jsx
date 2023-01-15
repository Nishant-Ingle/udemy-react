import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {}
});

const addCartItem = (cartItems, product) => {
  console.log(cartItems);
  console.log(product);
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) => cartItem.id === product.id
                                         ? {...cartItem, quantity: cartItem.quantity + 1}
                                         : cartItem);
  }

  return [...cartItems, {...product, quantity: 1}];
}

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};