'use client'
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function Blogcar({ posts }) {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                      },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">
                {
                    posts.map((post, i) => (
                        <div key={i} className='p-3 rounded-md items-center bg-slate-200 mt-2'>
                                <SwiperSlide className="bg-white rounded-lg">
                                <Link  href={`blog/${post.title_slug}`}>
                                        <Image className="rounded-lg rounded-b-none" width={400} height={200} src={`https://api.webofen.com/${post.image_big}`} />
                                        <div className="p-4">
                                            <h3 className="pb-2">{post.title}</h3>
                                            <p className="text-xs text-justify text-gray-700 leading-7">{post.summary}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                        </div>
                    ))
                }
            </Swiper>
        </>
    );
}
