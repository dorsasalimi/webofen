// context/CartContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems , setCart] = useState([]);
  
  // تابعی برای دریافت سبد خرید از سرور
  const fetchCartFromServer = async (userToken) => {
    if (userToken) {
      try {
        const response = await fetch(`https://api.webofen.com/api/getcart/${userToken}`, {
          method: 'GET',
        });
        const cartData = await response.json();
        if (cartData) {
          setCart(cartData); // ذخیره سبد خرید در Context
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    }
  };

  // اگر کاربر وارد شده باشد (توکن موجود باشد)، سبد خرید از سرور بارگذاری می‌شود
  useEffect(() => {
    const userToken = Cookies.get('userToken');
    if (userToken) {
      fetchCartFromServer(userToken);
    }
  }, []);

  const addToCart = (slug) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.slug === slug);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { slug, quantity: 1 }];
      }
    });
  };
  const removeItem = (slug) => {
    const updatedCart = cartItems.filter(item => item !== slug);
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider value={{ cartItems , addToCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);