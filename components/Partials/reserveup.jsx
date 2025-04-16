'use client'

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
        <div className="flex items-center justify-center fixed bottom-5 md:hidden bg-[#4d76c4] rounded-full p-6">
          <button
            onClick={toggleReserve}
            className="md:hidden z-20 relative"
          >
            <svg className="w-6 h-6" width="256" height="256" viewBox="-1.76 -1.76 19.52 19.52" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="#white"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>

          </button>
        </div>
      </div>
    </>
  );
};

export default Reserveup;
