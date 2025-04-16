'use client'
import React from 'react'
import { useState } from 'react';
const CreateTicket = () => {
    const [formData, setFormData] = useState({
        subject: "",
        department: "support",
        priority: "normal",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // اینجا می‌تونی دیتا رو بفرستی به بک‌اند
        console.log("Ticket Submitted:", formData);
    };
    return (
        <>
            <h2 className="text-xl font-bold mb-6">ارسال تیکت جدید</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-sm font-medium">عنوان</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border text-sm rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="مثلاً مشکل در ورود به حساب"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm mb-1 font-medium">دپارتمان</label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-2 text-sm"
                        >
                            <option value="support">پشتیبانی</option>
                            <option value="billing">مالی</option>
                            <option value="technical">فنی</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium">اولویت</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-2 text-sm"
                        >
                            <option value="low">کم</option>
                            <option value="normal">متوسط</option>
                            <option value="high">زیاد</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block mb-1 font-medium text-sm">پیام</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border rounded-xl px-4 py-2 text-sm"
                        placeholder="شرح کامل مشکل یا درخواست شما"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                >
                    ارسال تیکت
                </button>
            </form>
        </>
    )
}

export default CreateTicket