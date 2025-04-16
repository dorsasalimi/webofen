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
    const [activeTab, setActiveTab] = useState("home");
    useEffect(() => {
        const token = Cookies.get("userToken");
        if (token) {
            setmytoken(token);
        } else {
            router.push("/");
        }
    }, []);
    const renderTabContent = () => {
        switch (activeTab) {
            case "order":
                return <Orders token={mytoken} />;
            case "accounting":
                return <Accounting />;
            case "ticketing":
                return <Ticketing />;
            default:
                return null;
        }
    };
    return (
        <div className="bg-white container w-4/6 mx-auto h-full">
            <HeaderPanel />
            <div className="flex flex-wrap justify-between bg-zinc-100 w-full">
                <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="w-11/12 px-16 py-4">{renderTabContent()}</div>
            </div>
        </div>
    )
}

export default page