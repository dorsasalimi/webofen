import React from "react";
import Image from 'next/image';

const tabs = [
    { label: "سفارشات", key: "order" },
    { label: "مالی", key: "accounting" },
    { label: "پشتیبانی", key: "ticketing" },
];

export default function TabButtons({ activeTab, setActiveTab }) {
    return (
        <div className="md:order-first order-last flex md:inline-block text-end justify-between overflow-hidden bottom-0 fixed md:static w-full md:w-1/12 bg-white">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full  ${activeTab === tab.key ? "bg-zinc-100" : "text-gray-500 bg-zinc-50"}`}
                >
                    <div className="flex py-3 cursor-pointer">
                        <div className="w-full items-center text-center">
                            <Image className="rotate-[20deg] mx-auto" width={40} height={40} src={"/image/services/backlink.png"} />
                            <p className="text-sm">{tab.label}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}