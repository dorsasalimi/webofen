import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ datetime }) => {
  // Convert input strings to Date objects
  const start = new Date(datetime);
  console.log(start);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  const now = new Date();

  // Calculate total duration and elapsed time
  const totalDuration = end - start;
  const elapsed = Math.max(0, Math.min(now - start, totalDuration));
  const percentage = (elapsed / totalDuration) * 100;

  return (
    <div className="bg-white h-auto  w-full rounded-b-lg rounded-tl-lg text-end py-6 px-2 md:p-8 flex justify-evenly">
      <div className='text-black text-justify text-sm'>
        <p>تمدید قرص</p>
        <span className='text-[#252476] flex items-center'>مشاهده جزئیات
          <svg
            className='w-6'
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z"
                fill="#252476"
              />
            </g>
          </svg></span>

      </div>
      <div className="w-24 h-24">

        <CircularProgressbarWithChildren

          value={percentage}
          styles={buildStyles({
            pathColor: '#FFA500',
            trailColor: '#eeeeee',
          })}
        >
          <svg className="animate-bounce md:w-32" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="-46.08 -46.08 604.16 604.16"><path fill="#DFDFE1" d="M479.587 188.925c43.218-43.221 43.218-113.29 0-156.512-43.221-43.218-113.292-43.218-156.513 0L32.413 323.075c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0z" /><path fill="#CFCDD2" d="M479.587 32.414 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l290.663-290.662c43.218-43.221 43.218-113.29 0-156.511" /><path fill="#0164ae" d="m177.743 177.745-145.33 145.33c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /><path fill="#0164ae" d="M255.999 256 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /></svg>
          <div className="text-xs text-center text-black font-semibold">
            {Math.round(percentage)}%
          </div>
        </CircularProgressbarWithChildren>
      </div>

    </div>
  );
};

export default ProgressCircle;