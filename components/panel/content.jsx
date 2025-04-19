'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';

import Backlink from './tablet/Backlink';
import Cluster from './tablet/cluster';
import Content from './tablet/content';
import Security from './tablet/security';
import Seo from './tablet/seo';
import Spam from './tablet/spam';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return isMobile;
};

const PanelContent = ({ jobs }) => {
  const [activeSection, setActiveSection] = useState("backlink");
  const isMobile = useIsMobile();

  const sections = {
    backlink: <Backlink backlinks={jobs.backlink} />,
    content: <Content content={jobs.content} />,
    security: <Security security={jobs.security} />,
    cluster: <Cluster cluster={jobs.cluster} />,
    seo: <Seo seo={jobs.seo} />,
    spam: <Spam spam={jobs.spam} />
  };

  const services = [
    { id: 'backlink', label: 'بک لینک', icon: '/image/services/backlink.png' },
    { id: 'content', label: 'محتوا', icon: '/image/services/content.png' },
    { id: 'security', label: 'امنیت', icon: '/image/services/security.png' },
    { id: 'cluster', label: 'کلاستر', icon: '/image/services/cluster.png' },
    { id: 'seo', label: 'سئو', icon: '/image/services/rankup.png' },
    { id: 'spam', label: 'اسپم', icon: '/image/services/spamscore.png' },
  ];

  return (
    <div className="flex flex-wrap justify-between bg-zinc-100 w-full mb-20 overflow-hidden">
      <div className={`z-30 md:order-first order-last ${isMobile ? 'fixed bottom-0 w-full' : 'w-1/12 static'} bg-white`}>
        {isMobile ? (
          <Swiper
            direction="horizontal"
            slidesPerView={5}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[FreeMode,Autoplay]}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setActiveSection(service.id)}
                  className={`w-full flex flex-col items-center cursor-pointer py-4 ${
                    activeSection === service.id ? 'bg-zinc-200' : ''
                  }`}
                >
                  <Image
                    className="rotate-[20deg]"
                    width={50}
                    height={50}
                    src={service.icon}
                    alt={service.label}
                  />
                  <p className="text-[10px] md:text-sm">{service.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-col items-center gap-2 pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveSection(service.id)}
                className={`w-full flex flex-col items-center cursor-pointer py-3 ${
                  activeSection === service.id ? 'bg-zinc-200' : ''
                }`}
              >
                <Image
                  className="rotate-[20deg]"
                  width={50}
                  height={50}
                  src={service.icon}
                  alt={service.label}
                />
                <p className="text-[10px] md:text-sm">{service.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-11/12 p-4 md:px-16 py-4">
        {sections[activeSection]}
      </div>
    </div>
  );
};

export default PanelContent;
