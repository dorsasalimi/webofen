'use client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards, Scrollbar } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AnimatedServices() {
  // Animation variants for the service cards
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <>
    <div className="overflow-hidden">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation, Pagination, EffectCards, Scrollbar]}
        className="mySwiper md:h-fit sm:h-[30vh] rounded-xl max-w-3xl mx-auto"
      >
        <SwiperSlide className="p-4">
          <motion.div
            className="my-2 p-4 py-2 bg-gradient-to-r from-pink-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="flex items-center justify-center md:justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/backlink.png" alt="Backlink" />
              </div>
              <div className="ml-10 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">بک لینک</h4>
                <p className="text-xs text-zinc-400">Backlink</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/backlink">
              <motion.div
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-pink-600 to-pink-400 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-green-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/security.png" alt="امنیت"></img>
              </div>
              <div className="ml-16 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">امنیت</h4>
                <p className="text-xs text-zinc-400">Security</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/security">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-red-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/optimize.png" alt="بهینه سازی"></img>
              </div>
              <div className="ml-10 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">بهینه سازی</h4>
                <p className="text-xs text-zinc-400">Optimization</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/optimization">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-purple-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/cluster.png" alt="کیورد کلاستر"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">کیورد کلاستر</h4>
                <p className="text-xs text-zinc-400">Keyword Cluster</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/keyword-cluster">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-yellow-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/newspaper.png" alt="ریپورتاژ آگهی"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">ریپورتاژ آگهی</h4>
                <p className="text-xs text-zinc-400">Reportage</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/reportage">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-blue-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={5}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/content.png" alt="تولید محتوا"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">تولید محتوا</h4>
                <p className="text-xs text-zinc-400">Content Creation</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/content">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-green-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={6}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/rankup.png" alt="رنک دامین"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">رنک دامین</h4>
                <p className="text-xs text-zinc-400">Rank Domain</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/rankup">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
        
        <SwiperSlide className="p-4">
          <motion.div 
            className="my-2 p-4 py-2 bg-gradient-to-r from-orange-100 to-white rounded-xl transition-all duration-300 h-full relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={7}
          >
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full drop-shadow-lg rotate-[0.5rad]" src="/image/services/spamscore.png" alt="اسپم اسکور"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">اسپم اسکور</h4>
                <p className="text-xs text-zinc-400">Spam Score</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/spam-score">
              <motion.div 
                className="group flex items-center justify-end gap-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">مشاهده قرص</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}