'use client'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

export default function Sliderbox() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
       
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        className="mySwiper md:h-fit sm:h-[30vh] rounded-xl max-w-3xl mx-auto">

        <SwiperSlide>
          <div className="w-1/2 m-auto my-2 p-4 bg-white rounded-2xl  transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-2 border-orange-500/20" 
                  src="/image/services/backlink.png"
                  alt="بک لینک"
                />
                <div className="absolute -bottom-2 -right-2 bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">SEO</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">بک لینک</h3>
              <p className="text-sm text-gray-500 mb-4">Backlink</p>
            </div>

            
            <Link href="/services/backlink">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-orange-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-blue-500/20" 
                  src="/image/services/security.png"
                  alt="امنیت"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">Security</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">امنیت</h3>
              <p className="text-sm text-gray-500 mb-4">Website Security</p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/security">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-blue-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-green-500/20" 
                  src="/image/services/optimize.png"
                  alt="بهینه سازی"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Speed</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">بهینه سازی</h3>
              <p className="text-sm text-gray-500 mb-4">Optimization</p>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/optimization">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-green-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-purple-500/20" 
                  src="/image/services/cluster.png"
                  alt="کیورد کلاستر"
                />
                <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">Keywords</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">کیورد کلاستر</h3>
              <p className="text-sm text-gray-500 mb-4">Keyword Cluster</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/keyword-cluster">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-purple-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-red-500/20" 
                  src="/image/services/newspaper.png"
                  alt="ریپورتاژ آگهی"
                />
                <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">News</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">ریپورتاژ آگهی</h3>
              <p className="text-sm text-gray-500 mb-4">Reportage</p>
              <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/reportage">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-red-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-teal-500/20" 
                  src="/image/services/content.png"
                  alt="تولید محتوا"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">Content</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">تولید محتوا</h3>
              <p className="text-sm text-gray-500 mb-4">Content Creation</p>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/content">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-teal-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-amber-500/20" 
                  src="/image/services/rankup.png"
                  alt="رنک دامین"
                />
                <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">Ranking</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">رنک دامین</h3>
              <p className="text-sm text-gray-500 mb-4">Rank Domain</p>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/rankup">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-amber-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 relative mb-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  className="object-cover rounded-full border-4 border-indigo-500/20" 
                  src="/image/services/spamscore.png"
                  alt="اسپم اسکور"
                />
                <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">Score</div>
              </div>
              <h3 className="text-2xl font-bold text-[#13274F] mb-1">اسپم اسکور</h3>
              <p className="text-sm text-gray-500 mb-4">Spam Score</p>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
            </div>
            
            <div className="mb-6 text-sm text-gray-600 text-center leading-relaxed">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
            </div>
            
            <Link href="/services/spam-score">
              <div className="group flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-indigo-300/30 hover:shadow-lg transition-all duration-300">
                <span className="font-medium">افزودن به سبد</span>
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
