import React, { createContext, useState } from "react";
import productArray from "../data/productArray.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
<<<<<<< HEAD
 
 const [products, setProducts] = useState(productArray);
 const [cart, setCart] = useState([])

 const defaultContext = {
  products, setProducts, cart, setCart
 }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
=======
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(productArray);
  const [cart, setCart] = useState([]);

  //Cart Functionality
  const deleteItemCart = (id) => {
    const filtredCart = cart.filter((product) => product.id !== id);
    setCart(filtredCart);
  };

  const incrementQuantity = (item) => {
    setCart(
      cart.map((product) => {
        if (item.id === product.id) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      })
    );
  };
  const decrementQuantity = (item) => {
    setCart(
      cart.map((product) => {
        if (item.id === product.id) {
          product.quantity--;
          return product;
        } else {
          return product;
        }
      })
    );

    const defaultContext = {
      products,
      setProducts,
      cart,
      setCart,
      deleteItemCart,
      incrementQuantity,
      decrementQuantity,
      user,
      setUser,
    };

    return (
      <AppContext.Provider value={defaultContext}>
        {children}
      </AppContext.Provider>
    );
  };
>>>>>>> ae9cbc1fb35e963635b6cc8b599ebeec03b6187d
};

export { AppContext, AppContextProvider };
