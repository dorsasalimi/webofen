'use client';
import Link from 'next/link';
import { useUser } from "@/context/UserContext";
import { useCart } from '@/context/CartContext';
export default function AvatarWithCart() {
  const { cartItems } = useCart();
  const { isLoggedIn} = useUser();

  return (
    <Link className='relative' href={isLoggedIn ? "/dashboard" : "/login"}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-sm shadow-sm overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>        

      </div>
      {cartItems.length > 0 && (
        <span className="absolute bottom-0 left-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow">
          {cartItems.length}
        </span>
        
      )}
    </Link>
  );
}