'use client'
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Videocar() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper z-0">
                <SwiperSlide className="bg-white rounded-lg">
                    <Link href="#">
                        <video className="rounded-lg z-0" width="100%" height="400" controls preload="none">
                            <source src="/videos/webofen.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-lg z-0">
                    <Link href="#">
                        <video className="rounded-lg" width="100%" controls preload="none">
                            <source src="/videos/webofen.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
