"use client";

import { useState, useRef, useEffect } from "react";
import ProductTable from "./producttable";

const Orders = ({ token }) => {
    const [value, setValue] = useState(null);
    const [data, setdata] = useState([]);

    useEffect(() => {
        if (!token) return;
        setValue(token);
    }, [token]);
    useEffect(() => {
        if (!value) return;
        readorder(value);
    }, [value]);
    const readorder = async (value) => {
        const res2 = await fetch(`https://api.webofen.com/api/readorder/${value}/`, {
            method: "GET"
        });
        const data = await res2.json();
        setdata(data);
    }
    return (
        <div className="h-screen">
        <div className="flex justify-end">
            <div className="flex w-fit md:w-56">
               
            </div>
        </div>
        <div className="flex">
            <div className=" w-1/3 text-end rounded-md ">
                <div className="bg-white text-black rounded-t-lg h-full flex justify-center items-end">
                    <span className="font-semibold pt-4 text-gray-700">لیست سفارشات</span>
                </div>
            </div>
            <div className=" w-1/3">
            </div>
            <div className=" w-1/3 text-end rounded-md ">
            </div>
        </div>
        <div className="flex flex-wrap justify-start">
            <div className="bg-white text-black  w-1/3 text-center p-1">
            </div>
        </div>
        <div className="bg-white h-auto text-white w-full rounded-b-lg rounded-tl-lg text-end p-4 md:p-8">
            <ProductTable data={data} token={token}/>
        </div>
        
    </div>
    )
}

export default Orders