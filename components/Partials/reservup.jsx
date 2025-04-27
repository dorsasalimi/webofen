'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Clinic from "@/components/clinic/motion";
import TimingModal from "@/components/clinic/TimingModal";

const Reserveup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReserve = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className="md:w-1/3 h-fit md:sticky top-0 p-2 md:p-0 md:pt-1 ">
        <div
          className={`
            md:w-full md:h-auto bg-[#162832] z-30 transition-transform duration-300 ease-in-out
            overflow-y-auto md:translate-y-0
            ${isOpen ? "overflow-y-auto fixed bottom-0 left-0 h-[100vh]" : "translate-y-full fixed bottom-0 left-0 h-[90vh] overflow-hidden"}
            md:relative
            `}

        >
          <div className="flex justify-end p-4 md:hidden sticky top-0 bg-[#162832] z-40">
            <button
              className="text-white text-lg"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-2 md:p-0">
            <Clinic />
            <TimingModal />
          </div>
        </div>
        <div className="flex justify-center items-center fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-20">
          <button
            onClick={toggleReserve}
            className="md:hidden z-20 relative bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
            aria-label="Open reservation panel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            رزرو مشاوره
          </button>
        </div>
        </div>
    </>
  );
};

export default Reserveup;
