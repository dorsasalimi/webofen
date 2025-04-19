'use client'
import React from 'react'
import HeaderPanel from '@/components/panel/header'
import Orders from '@/components/panel/orders'
import Accounting from '@/components/panel/accounting';
import Ticketing from '@/components/panel/Ticketing';
import TabButtons from '@/components/panel/Tabbutton';
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const page = () => {
    const router = useRouter();
    const [mytoken, setmytoken] = useState();
    useEffect(() => {
        const token = Cookies.get("userToken");
        if (token) {
            setmytoken(token);
        } else {
            router.push("/");
        }
    }, []);

    return (
        <div className="bg-white container w-4/6 mx-auto h-full">
            <HeaderPanel />
            <div className="flex flex-wrap justify-between bg-zinc-100 w-full">

            </div>
        </div>
    )
}

export default page