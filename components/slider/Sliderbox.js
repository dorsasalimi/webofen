'use client'
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Sliderbox() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:h-[50vh] sm:h-[23vh] rounded-lg">
        <SwiperSlide><Image width={800} height={400} src="/image/slider1.jpg"/></SwiperSlide>
        <SwiperSlide><Image width={800} height={400} src="/image/slider1.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
