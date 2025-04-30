'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Login() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [captcha, setCaptcha] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const buttonVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    // Floating animation for background elements
    const floatingAnimation = {
        y: ['-5%', '5%'],
        transition: {
            y: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
            }
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-0 relative overflow-hidden w-full">

            <motion.div className='flex flex-wrap justify-between p-4 md:p-0 relative items-center'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    damping: 20
                }}>





                {/* Right side - Form with animations */}
                <div className='w-full md:w-2/5 flex justify-end'>
                    <motion.div
                        className="md:w-3/5 w-full p-8 pb-2 md:p-12"

                    >
                        <motion.div
                            className="flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image width={180} height={45} src="/image/logo.png" alt="Logo" className="h-12 object-contain" />
                            </motion.div>
                        </motion.div>

                        <motion.h2
                            className="text-2xl font-bold mb-6 text-center text-gray-800"
                            variants={itemVariants}
                        >
                            ورود به حساب کاربری
                        </motion.h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <motion.div
                                className="relative"
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </motion.svg>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    type="text"
                                    placeholder="شماره تلفن"
                                    {...register('phone', { required: 'شماره تلفن ضروری است' })}
                                />
                            </motion.div>
                            {errors.phone && (
                                <motion.p
                                    className="text-red-500 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    {errors.phone.message}
                                </motion.p>
                            )}

                            <motion.div
                                className="relative"
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        )}
                                        {!showPassword && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />}
                                    </motion.svg>
                                </div>
                                <input
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="رمز عبور"
                                    {...register('password', { required: 'رمز عبور ضروری است' })}
                                />

                            </motion.div>
                            {errors.password && (
                                <motion.p
                                    className="text-red-500 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    {errors.password.message}
                                </motion.p>
                            )}

                            <motion.div
                                className="flex justify-center"
                                variants={itemVariants}
                            >
                                <ReCAPTCHA
                                    sitekey="YOUR_REAL_RECAPTCHA_SITE_KEY"
                                    onChange={setCaptcha}
                                    className="transform scale-90 origin-left"
                                />
                            </motion.div>
                            {errors.captcha && (
                                <motion.p
                                    className="text-red-500 text-sm text-center"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    {errors.captcha.message}
                                </motion.p>
                            )}

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg flex items-center justify-center relative overflow-hidden group"
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                                disabled={loading}
                            >
                                <motion.span
                                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <motion.span className="absolute inset-0 w-0 bg-white/20 skew-x-20 transition-all duration-1000 group-hover:w-full" />
                                <span className="relative z-10">
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            لطفاً صبر کنید...
                                        </>
                                    ) : 'ورود به حساب'}
                                </span>
                            </motion.button>

                            {errors.root && (
                                <motion.div
                                    className="bg-red-50 border-l-4 border-red-500 p-4 rounded"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    <p className="text-red-700 text-sm">{errors.root.message}</p>
                                </motion.div>
                            )}
                        </form>

                        <motion.div
                            className="mt-6 text-center"
                            variants={itemVariants}
                        >
                            <motion.button
                                onClick={() => handleForgotPassword(document.querySelector('input[name="phone"]').value)}
                                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition relative"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">رمز عبور را فراموش کرده‌اید؟</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs"
                            variants={itemVariants}
                        >
                            © {new Date().getFullYear()} تمامی حقوق محفوظ است.
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden flex justify-end items-center "

                >
                    <div className='flex justify-center items-center bg-orange-200 h-screen'>
                        <motion.div
                            className=" p-8 pb-4 z-20 text-black"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.span
                                className="inline-block text-orange-700 font-semibold text-2xl mb-2"
                                variants={{
                                    hidden: { y: 0 },
                                    visible: (i) => ({
                                        y: [0, -2, 2, -2, 0],
                                        transition: {
                                            delay: i * 0.1,
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'easeInOut',
                                        },
                                    }),
                                }}
                                initial="hidden"
                                whileInView="visible"
                                custom={0}
                            >
                                وبوفن
                            </motion.span>
                            <motion.p
                                className="text-gray-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                راهکارهای هوشمند برای کسب و کار شما
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}