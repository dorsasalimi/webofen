'use client'
import React from 'react'
import { useState } from "react";
import Taskbox from '../taskbox';
import ProgressList from '../progress';
const Seo = ({ backlinks }) => {
    const [selected, setSelected] = useState('bazarpanel.com');
    const options = ['bazarpanel.com', 'ansarion.com', 'markazpanel.com'];
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ id: "", field1: "", field2: "" });
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
                        <span className="font-semibold pt-4 text-gray-700">سئو</span>
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
                <div className="flex mt-4">

                    {Array.isArray(backlinks) && backlinks.map((item) => (
                        item.status === 0 ? (
                        <button onClick={() => handleclick(item.id)} key={item.id}>
                        <svg className="animate-bounce " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="-46.08 -46.08 604.16 604.16"><path fill="#DFDFE1" d="M479.587 188.925c43.218-43.221 43.218-113.29 0-156.512-43.221-43.218-113.292-43.218-156.513 0L32.413 323.075c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0z" /><path fill="#CFCDD2" d="M479.587 32.414 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l290.663-290.662c43.218-43.221 43.218-113.29 0-156.511" /><path fill="#5e5483" d="m177.743 177.745-145.33 145.33c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /><path fill="#634c76" d="M255.999 256 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /></svg>
                        </button>
                                        ) : (
                    <ProgressList datetime={item.datetime} key={item.id} />
                    )
                    ))}

                </div>
            </div>

            <Taskbox />

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
                        {/* ضربدر بستن */}
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

export default Seo;