import React from "react";
import Image from "next/image";

const Taskbox = () => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">خلاصه وضعیت</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Awaiting Approval Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">انتظار تایید</p>
                <h4 className="text-2xl font-bold text-gray-800 mr-2">0</h4>
              </div>
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                <span className="mr-2">در حال بررسی</span>
              </div>
            </div>
          </div>
        </div>

        {/* Consumed Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">مصرف شده</p>
                <h4 className="text-2xl font-bold text-gray-800 mr-2">4</h4>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="mr-2">تکمیل شده</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Taskbox;