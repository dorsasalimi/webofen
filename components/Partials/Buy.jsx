'use client';

import { useState, useEffect, useRef } from 'react';
import { useUser } from '@/context/UserContext'; 
import { useCart } from '@/context/CartContext';
import Cookies from 'js-cookie';

export default function Buy({ title, slug }) {
  const { addToCart } = useCart();
  const { isLoggedIn, login, logout } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpInputs = useRef([]);
  const [show, setShow] = useState(false);

  const checkLogin = () => {
    if (isLoggedIn) {
      // اگر کاربر وارد شده بود، محصول رو به سبد خرید اضافه کن
      fetch(`https://api.webofen.com/api/setorder/${Cookies.get('userToken')}/${slug}`, { method: 'GET' })
        .then(() => {
          setTimeout(() => setShow(true), 100);
          setTimeout(() => setShow(false), 4000);
          addToCart(slug);
        });
    } else {
      setIsModalOpen(true);
    }
  };

  const sendreq = async () => {
    const otpCode = otp.join('').split('').reverse().join('');
    const res2 = await fetch(`https://api.webofen.com/api/checkverify/${phone}/${otpCode}`, { method: 'GET' });
    const res = await res2.json();
    if (res !== false) {
      Cookies.set('userToken', res, { expires: 1 });
      login(res, res); // لاگین کاربر بعد از دریافت توکن
    }
  };

  const handleSendOtp = () => {
    if (phone.length === 11) {
      sendsms(phone);
      setOtpSent(true);
    }
  };

  const sendsms = async () => {
    const res = await fetch(`https://api.webofen.com/api/sendsms/${phone}`, { method: 'GET' });
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOtpSent(false); // برگشت به فرم شماره تلفن
    setOtp(['', '', '', '', '']); // پاک کردن مقدار OTP
    setPhone(''); // پاک کردن شماره تلفن
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index < 4) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  return (
    <>
      <button
        onClick={checkLogin}
        className="bg-green-500 hover:bg-green-400 text-white text-sm mt-2 py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded float-end"
      >
        خرید قرص {title}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">{otpSent ? 'کد تایید را وارد کنید' : 'شماره تلفن را وارد کنید'}</h2>
            {!otpSent ? (
              <>
                <input
                  type="text"
                  placeholder="شماره تلفن"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded-md mb-3 text-center"
                />
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                >
                  ارسال کد تایید
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputs.current[index] = el)}
                      type="text"
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center border rounded-md text-lg font-semibold"
                      style={{ direction: 'rtl' }}
                    />
                  ))}
                </div>
                <button
                  onClick={sendreq}
                  className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition"
                >
                  تایید
                </button>
              </>
            )}
            <button onClick={closeModal} className="mt-4 text-red-500 w-full text-center">
              بستن
            </button>
          </div>
        </div>
      )}

      <div
        className={`fixed bottom-[-2px] left-0 mb-4 ml-4 bg-blue-500 text-white p-4 z-50 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${show ? 'translate-y-0' : 'translate-y-80'}`}
      >
        <p className="text-xs">قرص {title} به لیست سفارشات اضافه شد</p>
      </div>
    </>
  );
}