'use client'
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Pillsec = () => {
    return (
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
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/spamscore.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص کاهش اسپم اسکور</h3>
                        <span className=""></span>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/backlink.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص بک لینک (BACKLINK)</h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/security.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص امنیت وبسایت</h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/optimize.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص  بهینه سازی وبسایت</h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/rankup.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص  افزایش دامین آتوریتی</h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/content.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص تولید محتوا </h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-lg">
                <Link href="#">
                    <Image className="rounded-lg rounded-b-none mx-auto" width={250} height={200} src="/image/services/security.png" />
                    <div className="p-2">
                        <h3 className="pb-2 text-center">قرص امنیت وبسایت</h3>
                        <p className="text-xs text-justify text-gray-700 leading-7 pb-6">در آخرین آپدیت گوگل تعداد زیادی از فاکتورهایی که در سالهای گذشته حائز اهمیت بوده اند تحت تاثیر قرار گرفته اند. برای کسب اطلاعات بیشتر در این رابطه می توانید در ادامه مقاله بحث های مرتبط با انی موضوع را مطالعه فرمایید.</p>
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default Pillsec