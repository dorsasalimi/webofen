'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HeaderPanel() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <div className="flex">
            <div className="w-3/12 flex justify-center items-center rounded-tl-xl p-1 md:p-6">
                <button onClick={toggleMenu}>
                    <svg className="text-center w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g id="style=bulk">
                                <g id="setting">
                                    <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M7.59248 2.14193C8.75191 1.45656 10.2226 1.87704 10.8946 3.00654L10.8991 3.01421L11.0091 3.20423L11.0107 3.20701C11.3807 3.85247 11.7666 4.00751 12.0012 4.00751C12.237 4.00751 12.6259 3.85115 13.0009 3.20423L13.1154 3.00651C13.7874 1.877 15.2581 1.45656 16.4175 2.14193L18.1421 3.12883C19.4147 3.85604 19.8463 5.48713 19.1194 6.74522L19.1189 6.74611C18.7439 7.39298 18.8028 7.8062 18.9198 8.00929C19.0369 8.21249 19.3648 8.47001 20.11 8.47001C21.5616 8.47001 22.76 9.65323 22.76 11.12V12.88C22.76 14.3317 21.5768 15.53 20.11 15.53C19.3648 15.53 19.0369 15.7875 18.9198 15.9907C18.8028 16.1938 18.7439 16.607 19.1189 17.2539L19.1212 17.2579C19.8444 18.5235 19.4157 20.1431 18.1425 20.871L16.4174 21.8581C15.258 22.5434 13.7874 22.123 13.1154 20.9935L13.1109 20.9858L13.0009 20.7958L12.9993 20.793C12.6293 20.1476 12.2434 19.9925 12.0087 19.9925C11.773 19.9925 11.3841 20.1489 11.0091 20.7958L10.8946 20.9935C10.2226 22.123 8.75199 22.5434 7.59257 21.8581L5.8679 20.8712C4.59558 20.1439 4.16378 18.5128 4.8906 17.2548L4.89112 17.2539C5.26605 16.607 5.20721 16.1938 5.09018 15.9907C4.97308 15.7875 4.64521 15.53 3.9 15.53C2.43322 15.53 1.25 14.3317 1.25 12.88V11.12C1.25 9.66837 2.43322 8.47001 3.9 8.47001C4.64521 8.47001 4.97308 8.21249 5.09018 8.00929C5.20721 7.8062 5.26605 7.39298 4.89112 6.74611L4.8906 6.74522C4.16378 5.48726 4.59518 3.85639 5.86749 3.12906L7.59248 2.14193Z" fill="#BFBFBF"></path>
                                    <path id="vector" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#000000"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <svg className='w-6 h-6 md:w-8 md:h-8 mr-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ffbe32">
                            <path
                                opacity=".5"
                                d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"
                            />
                            <path
                                d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0Z"
                            />
                        </g>
                    </svg>
                {isMenuVisible && (
                    <div className="absolute top-12 bg-white shadow-lg p-4 rounded-md mt-2 w-56 z-40">
                        <ul>
                            <li>
                                <Link href="/dashboard/order">
                                    <p className="mt-6 relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">سفارشات</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/accounting">
                                    <p className="mt-6 relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">مالی</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/support">
                                    <p className="mt-6 relative hover:text-blue-900 after:bg-[#0365b0] after:absolute after:h-[2px] after:top-8 after:w-0 after:bottom-0 after:right-0 hover:after:w-1/2 after:transition-all after:duration-300 cursor-pointer">پشتیبانی</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="bg-white w-6/12 flex rounded-br-xl justify-center p-3">
                <Image width={200} height={50} src={"/image/logo.png"} />
            </div>
            <div className="bg-white w-3/12 items-center md:justify-end justify-evenly flex rounded-br-xl md:p-6">
                <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#292D32"></path>
                        <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#292D32"></path>
                        <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#292D32"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default HeaderPanel;
