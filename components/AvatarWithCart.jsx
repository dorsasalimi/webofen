'use client';
import Link from 'next/link';
import { useUser } from "@/context/UserContext";
import { useCart } from '@/context/CartContext';
export default function AvatarWithCart() {
  const { cartItems } = useCart();
  const { isLoggedIn} = useUser();

  return (
    <Link className='relative' href={isLoggedIn ? "/dashboard" : "/login"}>
      <div className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center text-xl">
        👤
      </div>
      {cartItems.length > 0 && (
        <span className="absolute bottom-0 left-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
}