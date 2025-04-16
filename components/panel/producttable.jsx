"use client";
import { useState } from "react";
import { useCart } from '@/context/CartContext';
export default function ProductTable({ data, token }) {
    const { removeItem } = useCart();
    const [productQuantities, setProductQuantities] = useState(
        data.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, newQuantity) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }));
    };

    const totalPrice = data.reduce((sum, product) => {
        const quantity = productQuantities[product.id] || 1;
        return sum + product.price * quantity;
    }, 0);

    const handleSubmit = async () => {
        const token = document.getElementById("token").value;
        // ساختن آرایه‌ای از محصولات که قرار است ارسال شوند
        const orderData = data.map((product) => ({
            slug: product.title_slug, // اسلاگ محصول
            quantity: productQuantities[product.id] || 1, // تعداد انتخابی
            price: product.price * (productQuantities[product.id] || 1), // قیمت کل
            token: token
        }));

        try {
            const response = await fetch("https://api.webofen.com/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: orderData })
            });

            const result = await response.json();
            console.log("نتیجه پرداخت:", result);

            if (response.ok) {
                alert("پرداخت با موفقیت انجام شد!");
            } else {
                alert("خطا در پرداخت: " + result.message);
            }
        } catch (error) {
            console.error("خطای ارسال درخواست:", error);
            alert("مشکلی در ارسال درخواست پیش آمد.");
        }
    };
    const handleDelete = (e,id, slug) => {
        const button = e.target;
        const row = button.closest('tr');
        if (row) row.remove();
        fetch(`https://api.webofen.com/api/removeorder/${id}`, { method: 'GET' })
            .then(() => {
                
                removeItem(slug)
            });
    };
    return (
        <div className="max-w-4xl text-gray-900 mx-auto ">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-center">
                        <th className="p-1 border"></th>
                        <th className="p-2 border">تصویر</th>
                        <th className="p-2 border">نام محصول</th>
                        <th className="p-2 border">تعداد</th>
                        <th className="p-2 border">قیمت</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product) => (
                        <tr key={product.id} className="text-center">
                            <input id="token" type="hidden" value={token} />
                            <td className="p-1 border">
                                <button onClick={(e) => handleDelete(e,product.id, product.slug)} className=" text-red-600 px-3 py-1">X</button>
                            </td>
                            <td className="p-2 border">
                                <img src={`https://api.webofen.com/${product.image_big}`} alt={product.title} className="w-12 h-12 mx-auto" />
                            </td>
                            <td className="p-2 border">قرص {product.title}</td>
                            <td className="p-2 border">
                                <input
                                    type="number"
                                    min="1"
                                    value={productQuantities[product.id] || 1}
                                    onChange={(e) =>
                                        handleQuantityChange(product.id, parseInt(e.target.value))
                                    }
                                    className="w-12 p-1 border rounded text-center"
                                />
                            </td>
                            <td className="p-2 border">{(product.price * (productQuantities[product.id] || 1)).toLocaleString()} تومان</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4 p-4 border-t">
                <span className="text-sm md:text-lg font-semibold text-gray-400">جمع کل: {totalPrice.toLocaleString()} تومان</span>
                <button onClick={handleSubmit} className="bg-green-500 text-white px-5 py-2 rounded text-sm md:text-md">پرداخت همه</button>
            </div>
        </div>
    );
}