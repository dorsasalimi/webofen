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
      <div className="md:w-1/3 h-fit md:sticky top-0 p-2 md:p-0 md:pt-1">
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
        <div className="flex items-center fixed bottom-0 md:hidden rounded-full w-full z-20">
          <button
            onClick={toggleReserve}
            className="md:hidden z-20 relative"
          >
            <Image width={420} height={200} src='/image/reserve.png'></Image>
          </button>
        </div>
        </div>
    </>
  );
};

export default Reserveup;
