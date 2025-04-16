import React from "react";
import Image from "next/image";
import Backlink from "./tablet/Backlink";
const Content = ({jobs}) => {

  return (
    <div className="flex flex-wrap justify-between bg-zinc-100 w-full mb-20 overflow-hidden">
      <div className=" z-30 md:order-first order-last flex md:inline-block text-end justify-between overflow-hidden bottom-0 fixed md:static w-full md:w-1/12 bg-white">
        <div className="w-1/6 md:w-full  flex md:py-3 cursor-pointer rounded-tr-md rounded-br-md bg-zinc-100">
          <div className="w-full items-center text-center">
            <Image className="rotate-[20deg] mx-auto" width={50} height={50} src={"/image/services/backlink.png"} />
            <p className="text-[10px] md:text-sm">بک لینک</p>
          </div>
        </div>
        <div className="w-1/6 md:w-full  flex md:py-3 cursor-pointer  rounded-tr-md rounded-br-md">
          <div className="w-full flex flex-col items-center">
            <Image className="rotate-[20deg]" width={50} height={50} src={"/image/services/content.png"} />
            <p className="text-[10px] md:text-sm">محتوا</p>
          </div>
        </div>
        <div className="w-1/6 md:w-full  flex md:py-3 cursor-pointer  rounded-tr-md rounded-br-md">
          <div className="w-full flex flex-col items-center">
            <Image className="rotate-[20deg]" width={50} height={50} src={"/image/services/security.png"} />
            <p className="text-[10px] md:text-sm">امنیت</p>
          </div>
        </div>
        <div className="w-1/6 md:w-full  flex md:py-3 cursor-pointer  rounded-tr-md rounded-br-md">
          <div className="w-full flex flex-col items-center">
            <Image className="rotate-[20deg]" width={50} height={50} src={"/image/services/cluster.png"} />
            <p className="text-[10px] md:text-sm">بک لینک</p>
          </div>
        </div>
        <div className="w-1/6 md:w-full flex md:py-3 cursor-pointer  rounded-tr-md rounded-br-md">
          <div className=" w-full flex flex-col items-center">
            <Image className="rotate-[20deg]" width={50} height={50} src={"/image/services/rankup.png"} />
            <p className="text-[10px] md:text-sm">سئو</p>
          </div>
        </div>
        <div className="w-1/6 md:w-full flex md:py-3 cursor-pointer  rounded-tr-md rounded-br-md">
          <div className="w-full flex flex-col items-center">
            <Image className="rotate-[20deg]" width={50} height={50} src={"/image/services/spamscore.png"} />
            <p className="text-[10px] md:text-sm">اسپم</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 p-4 md:px-16 py-4">
          <Backlink id="backlink" backlinks={jobs.backlink}/>
      </div>

    </div>
  );
}
export default Content