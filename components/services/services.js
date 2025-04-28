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

export default function Sliderbox() {
  return (
    <>
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
      className="mySwiper md:h-fit sm:h-[30vh] rounded-xl max-w-3xl mx-auto "
    >

        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-pink-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-center md:justify-end">
              <div className="absolute md:-right-[5%] right-[10%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/backlink.png" alt="Backlink"></img>
              </div>
              <div className="ml-10 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">بک لینک</h4>
                <p className="text-xs text-zinc-400">Backlink</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/backlink">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-pink-600 to-pink-400 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-green-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/security.png"
                  alt="امنیت"></img>
              </div>
              <div className="ml-16 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">امنیت</h4>
                <p className="text-xs text-zinc-400">Security</p>
              </div>

            </div>


            <Link className="flex justify-end" href="/services/security">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-red-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/optimize.png" alt="بهینه سازی"></img>
              </div>
              <div className="ml-10 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">بهینه سازی</h4>
                <p className="text-xs text-zinc-400">Optimization</p>
              </div>

            </div>


            <Link className="flex justify-end" href="/services/optimization">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-purple-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/cluster.png" alt="کیورد کلاستر"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">کیورد کلاستر</h4>
                <p className="text-xs text-zinc-400">Keyword Cluster</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/keyword-cluster">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-yellow-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/newspaper.png" alt="ریپورتاژ آگهی"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">ریپورتاژ آگهی</h4>
                <p className="text-xs text-zinc-400">Reportage</p>
              </div>
            </div>
            <Link className="flex justify-end"  href="/services/reportage">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-blue-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/content.png" alt="تولید محتوا"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">تولید محتوا</h4>
                <p className="text-xs text-zinc-400">Content Creation</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/content">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-green-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/rankup.png" alt="رنک دامین"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">رنک دامین</h4>
                <p className="text-xs text-zinc-400">Rank Domain</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/rankup">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-4">
          <div className="my-2 p-4 py-2 bg-gradient-to-r from-orange-50  to-white rounded-xl transition-all duration-300 h-full">
            <div className="flex items-center justify-end">
              <div className="absolute -right-[5%] top-[38%] transform -translate-y-1/2">
                <img className="h-24 w-24 rounded-full  drop-shadow-lg rotate-[0.5rad]" src="/image/services/spamscore.png" alt="اسپم اسکور"></img>
              </div>
              <div className="ml-8 pt-10 pb-6">
                <h4 className="text-lg font-medium text-orange-800">اسپم اسکور</h4>
                <p className="text-xs text-zinc-400">Spam Score</p>
              </div>
            </div>
            <Link className="flex justify-end" href="/services/spam-score">
              <div className=" group flex items-center justify-end gap-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-2  rounded-lg shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="text-sm">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
