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
    <div className="bg-white h-auto inline-block rounded-b-lg rounded-tl-lg text-end py-6 px-2 md:p-8  md:justify-between justify-evenly">

      <div className="md:ml-20 md:w-40 md:h-40 w-24 h-24">

        <CircularProgressbarWithChildren

          value={percentage}
          styles={buildStyles({
            pathColor: '#FFA500',
            trailColor: '#eeeeee',
          })}
        >
          <svg className="md:w-32 w-12" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="-46.08 -46.08 604.16 604.16"><path fill="#DFDFE1" d="M479.587 188.925c43.218-43.221 43.218-113.29 0-156.512-43.221-43.218-113.292-43.218-156.513 0L32.413 323.075c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0z" /><path fill="#CFCDD2" d="M479.587 32.414 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l290.663-290.662c43.218-43.221 43.218-113.29 0-156.511" /><path fill="#0164ae" d="m177.743 177.745-145.33 145.33c-43.218 43.221-43.216 113.29.002 156.512 43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /><path fill="#0164ae" d="M255.999 256 32.414 479.587c43.219 43.218 113.29 43.218 156.51 0l145.331-145.331z" /></svg>
          <div className="text-xs text-center text-black font-semibold">
            {Math.round(percentage)}%
          </div>
        </CircularProgressbarWithChildren>
      </div>

    </div>
  );
};

export default ProgressCircle;