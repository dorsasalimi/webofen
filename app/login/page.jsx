'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [captcha, setCaptcha] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('/api/auth/check');
            const result = await response.json();
            if (result.authenticated) {
                setAuthenticated(true);
                router.push('/dashboard');
            }
        };
        checkAuth();
    }, [router]);

    const onSubmit = async (data) => {
        if (!captcha) {
            setError('captcha', { type: 'manual', message: 'لطفاً کپچا را تکمیل کنید' });
            return;
        }
        setLoading(true);

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, captcha }),
        });

        const result = await response.json();
        setLoading(false);
        if (!response.ok) {
            setError('root', { type: 'manual', message: result.message || 'خطایی رخ داده است' });
        } else {
            router.push('/dashboard');
        }
    };

    const handleForgotPassword = async (phone) => {
        if (!phone) {
            setError('phone', { type: 'manual', message: 'شماره تلفن را وارد کنید' });
            return;
        }
        setLoading(true);
        await fetch('/api/send-reset-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone }),
        });
        setLoading(false);
        alert('کد بازنشانی ارسال شد!');
    };

    return (
        <>
            <div className='flex pt-10 text-center justify-center'>
                <Image width={200} height={50} src={"/image/logo.png"} />
            </div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">ورود</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="شماره تلفن" {...register('phone', { required: 'شماره تلفن ضروری است' })} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                    <input className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="رمز عبور" {...register('password', { required: 'رمز عبور ضروری است' })} />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                    <ReCAPTCHA sitekey="YOUR_REAL_RECAPTCHA_SITE_KEY" onChange={setCaptcha} className="mb-4" />
                    {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha.message}</p>}

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition" disabled={loading}>
                        {loading ? 'لطفاً صبر کنید...' : 'ورود'}
                    </button>

                    {errors.root && <p className="text-red-500 text-sm mt-2">{errors.root.message}</p>}
                </form>

                <button onClick={() => handleForgotPassword(document.querySelector('input[name="phone"]').value)} className="mt-4 text-blue-500 hover:underline text-sm block text-center">
                    رمز عبور را فراموش کرده‌اید؟
                </button>
            </div>
        </>

    );
}