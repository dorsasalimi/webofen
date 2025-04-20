'use client'
import React from 'react'
import { useState } from "react";
import Taskbox from '../taskbox';
import ProgressList from '../progress';
const Backlink = ({ backlinks }) => {
    const [selected, setSelected] = useState('bazarpanel.com');
    const options = ['bazarpanel.com', 'ansarion.com', 'markazpanel.com'];
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ id: "", field1: "", field2: "" });
    console.log(backlinks)
    const handleclick = (id) => {
        setFormData({ ...formData, ['id']: id });
        setShowModal(true)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async () => {
        console.log("ورودی‌ها:", formData);
        const response = await fetch("https://api.webofen.com/settask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ items: formData })
        });
        console.log(response);
        setShowModal(false);
    };
    return (
        <>
            <div className="flex justify-end">
                <div className="flex w-3/5 md:w-56">
                    <select
                        className="w-full p-2 border-0 rounded-lg focus:outline-none  focus:ring-blue-500"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="" disabled>انتخاب کنید...</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex">
                <div className=" w-1/3 text-end rounded-md ">
                    <div className="bg-white text-black rounded-t-lg h-full flex justify-center items-end">
                        <span className="font-semibold pt-4 text-gray-700">بک لینک ها</span>
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
            <div className="bg-white h-auto text-white w-full rounded-b-lg rounded-tl-lg text-end p-1 md:p-8">
                <div className="mt-4 flex">
                    <div className='text-black text-justify text-sm mr-10'>
                    {backlinks.map((item) => (
                            <p className='text-black' key={item.id}>
                                {item.siteurl}
                            </p>
                        ))}
                        <a href="">
                            <span className='text-[#252476] flex items-center'>مشاهده جزئیات
                                <svg
                                    className='w-6'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
                                            fill="#252476"
                                        />
                                    </g>
                                </svg></span>
                        </a>
                    </div>
                    {Array.isArray(backlinks) && backlinks.map((item) => (
                        item.status === '0' ? (
                            <button onClick={() => handleclick(item.id)} key={item.id}>
                                <svg className="animate-bounce " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-46.08 -46.08 604.16 604.16"><path fill="#DFDFE1" d="M479.587 188.925c43.218-43.221 43.218-113.29 0-156.512-43.221-43.218-113.292-43.218-156.513 0L32.413 323.075c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0z" /><path fill="#CFCDD2" d="M479.587 32.414 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l290.663-290.662c43.218-43.221 43.218-113.29 0-156.511" /><path fill="#5e5483" d="m177.743 177.745-145.33 145.33c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /><path fill="#634c76" d="M255.999 256 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /></svg>
                            </button>
                        ) : (
                            <div>
                                <div className='block mt-2'>
                                    <ProgressList datetime={item.datetime} key={item.id} />

                                </div>
                            </div>
                        )
                    ))}

                </div>
            </div>

            <Taskbox />

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-semibold mb-4">ثبت اطلاعات لینک</h2>

                        <input
                            type="text"
                            name="field1"
                            placeholder="لینک صفحه فرود"
                            value={formData.field1}
                            onChange={handleChange}
                            className="w-full mb-3 p-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="field2"
                            placeholder="کلمه کلیدی"
                            value={formData.field2}
                            onChange={handleChange}
                            className="w-full mb-4 p-2 border rounded-lg"
                        />

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                        >
                            ثبت
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Backlink