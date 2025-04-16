'use client';

import { CartProvider } from "@/context/CartContext";
import { UserProvider } from '@/context/UserContext';

export function Providers({ children }) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
}