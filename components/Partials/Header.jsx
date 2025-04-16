'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AvatarWithCart from '../AvatarWithCart'
const Header = () => {
    function openmenu() {
        let nav = document.getElementById("navigation").style;
        if (nav.display === "none") {
          nav.display = "block";
        } else {
          nav.display = "none";
        }
      }
      function closemenu() {
        document.getElementById("navigation").style.display = "none";
      }
    return (
        <div className="flex justify-between container p-4">
            <div className="w-1/4 relative">
                <Link href="/">
                <Image src="/image/logo.png" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </Link>
                
            </div>

            <div className="w-3/4 items-center hidden md:flex">
                <ul className="flex justify-end">
                    <li className="text-sm text-gray-800 m-4"><Link className="relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href={"/"}>صفحه اصلی</Link></li>
                    <li className="text-sm text-gray-800 m-4"><Link className="relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href={"/blog"}>بلاگ</Link></li>
                    <li className="text-sm text-gray-800 m-4"><Link className="relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href={"/about"}>درباره ما</Link></li>
                    <li className="text-sm text-gray-800 m-4"><Link className="relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" href={"/about"}>تماس با ما</Link></li>
                </ul>
            </div>
            <div className='flex justify-end'>
            <div id="navigation" style={{ display: 'none' }} className="absolute right-0 top-0 h-fit w-full z-10 bg-white border">
          <ul className=" flex items-center  text-base cursor-pointer pt-10 flex-wrap lg:hidden">
            <li onClick={closemenu} className="hover:bg-gray-200 py-4 px-6 w-full">
              <Link className='flex' href="/">
                <p className='text-base mx-auto'>صفحه اصلی</p>
              </Link>
            </li>
            <li onClick={closemenu} className="hover:bg-gray-200 py-4 px-6 w-full">
              <Link className='flex' href="/blog">
                <p className='text-base mx-auto'>بلاگ</p>
              </Link>
            </li>
            <li onClick={closemenu} className="hover:bg-gray-200 py-4 px-6 w-full">
              <Link className='flex' href="/about">
                <p className='text-base mx-auto'>درباره ما</p>
              </Link>
            </li>
            <li onClick={closemenu} className="hover:bg-gray-200 py-4 px-6 w-full">
              <Link className='flex' href="/about">
                <p className='text-base mx-auto'>تماس با ما</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
                <button onClick={openmenu} className="md:hidden z-10 relative px-2">
                <svg className='w-6 h-6' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#000"><path d="M19 3.32h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2ZM8 3.32H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2ZM19 14.32h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2ZM8 14.32H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z"/></g></svg>
                </button>
                    </div>
        <AvatarWithCart />
        </div>
        </div>
    )
}

export default Header