'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

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

const DashboardContent = ({ jobs }) => {
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
    { id: 'backlink', label: 'بک لینک', icon: '/image/services/backlink.png', color: 'white' },
    { id: 'content', label: 'محتوا', icon: '/image/services/content.png', color: 'from-emerald-400 to-emerald-600' },
    { id: 'security', label: 'امنیت', icon: '/image/services/security.png', color: 'from-red-400 to-red-600' },
    { id: 'cluster', label: 'کلاستر', icon: '/image/services/cluster.png', color: 'from-amber-400 to-amber-600' },
    { id: 'seo', label: 'سئو', icon: '/image/services/rankup.png', color: 'from-purple-400 to-purple-600' },
    { id: 'spam', label: 'اسپم', icon: '/image/services/spamscore.png', color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <div className="flex flex-col md:flex-row relative bg-gray-100">
      {/* Sidebar for desktop */}
      <div className={`${isMobile ? 'hidden' : 'block'} md:w-44 bg-white`}>

        <div className="pr-2">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(service.id)}
              className={`w-full flex items-center space-x-3 space-x-reverse p-3 mb-2 rounded-r-xl transition-all duration-300 ${
                activeSection === service.id 
                  ? ` text-blue-950 shadow-r-md bg-gray-100` 
                  : 'hover:bg-gray-300 text-gray-700'
              }`}
            >
              <div className={`flex-shrink-0 p-2 rounded-lg ${
                activeSection === service.id ? 'bg-white bg-opacity-20' : 'bg-gray-200'
              }`}>
                <Image
                  width={28}
                  height={28}
                  src={service.icon}
                  alt={service.label}
                  className={activeSection === service.id ? '' : 'opacity-70'}
                />
              </div>
              <span className="text-sm font-medium">{service.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        <div className="p-6">
          {sections[activeSection]}
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            modules={[FreeMode]}
            className="py-2"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <button
                  onClick={() => setActiveSection(service.id)}
                  className={`flex items-center justify-center flex-col  p-2 rounded-lg ${
                    activeSection === service.id ? `text-blue-950 shadow-r-md bg-gray-100` : ''
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    activeSection === service.id ? 'bg-white bg-opacity-20' : 'bg-gray-300'
                  }`}>
                    <Image
                      width={24}
                      height={24}
                      src={service.icon}
                      alt={service.label}
                    />
                  </div>
                  <span className="text-xs mt-1">{service.label}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
