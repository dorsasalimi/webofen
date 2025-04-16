'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from 'flowbite';
export default function Reservation() {  
  const $targetEl = document.getElementById('modalEl');
  const options = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0',
    closable: true,
    onHide: () => {
        document.querySelector("div.fixed.z-10").classList.add("hidden");
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
};
const instanceOptions = {
  id: 'modalEl',
  override: true
};
  const modal = new Modal($targetEl, options, instanceOptions);
  const timingbtn = document.getElementsByClassName("timingbtn");
  for (var i = 0; i < timingbtn.length; i++) {
    var self = timingbtn[i];
    self.addEventListener('click', function () {  
        modal.show();
        let dataday = this.getAttribute('data-day');
        let datatime = this.getAttribute('data-time');
        if (dataday === "1") {
          document.getElementById("setday").innerHTML = first.dayname + " مورخ " + first.datetime;
        }else if (dataday === "2") {
          document.getElementById("setday").innerHTML = second.dayname + " مورخ " + second.datetime;
        }else if (dataday === "3") {
          document.getElementById("setday").innerHTML = third.dayname + " مورخ " + third.datetime;
        }else{
          document.getElementById("setday").innerHTML = forth.dayname + " مورخ " + forth.datetime;
        }
        if (datatime === "1") {
          document.getElementById("settimer").innerHTML = "ساعت 11 الی 12:30 دقیقه";
        }else if (datatime === "2") {
          document.getElementById("settimer").innerHTML = "ساعت 13 الی 14:30 دقیقه";
        }else if (datatime === "3") {
          document.getElementById("settimer").innerHTML = "ساعت 15 الی 16:30 دقیقه";
        }
    });
  }
  
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState([]);
  const [third, setthird] = useState([]);
  const [forth, setforth] = useState([]);
  const timing = {};
  const timing2 = {};
  const timing3 = {};
  const timing4 = {};
  useEffect(() => {
    var date = new Date();
    //first
    let dayFormat = new Intl.DateTimeFormat("fa", { weekday: "long" });
    timing.dayname = dayFormat.format(date.setDate(date.getDate() + 1));
    var dateFormats = new Intl.DateTimeFormat("fa", { year: "numeric", month: "2-digit", day: "2-digit" });
    timing.datetime = dateFormats.format(date.setDate(date.getDate()));
    setfirst(timing);
    //second
    timing2.dayname = dayFormat.format(date.setDate(date.getDate() + 1));
    timing2.datetime = dateFormats.format(date.setDate(date.getDate()));
    setsecond(timing2);
    timing3.dayname = dayFormat.format(date.setDate(date.getDate() + 1));
    timing3.datetime = dateFormats.format(date.setDate(date.getDate()));
    setthird(timing3);
    timing4.dayname = dayFormat.format(date.setDate(date.getDate() + 1));
    timing4.datetime = dateFormats.format(date.setDate(date.getDate()));
    setforth(timing4);
  }, []);

  return (
    <>
      <div className="bg-[#162832] md:px-4 w-full">
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
            <path stroke-linecap="round" color='#cfcfcf' stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 className='text-gray-100'>انتخاب زمان جلسه مشاوره</h3>
        </div>
        <div className='container flex mt-4'>
        <div className='w-1/4 p-2'>
            <div className='bg-[#163343] text-gray-400 rounded-lg h-48 timeback'>
            <div className='bg-[#163343]  h-16 w-auto rounded-t-lg headtimeback '>
              <p className='text-gray-300 text-[.8rem] font-bold text-center pt-2'>{first.dayname}</p>
              <p className="text-orange-400 text-[10px] text-center time mt-2">{first.datetime}</p>
            </div>
            <p data-modal-target="static-modal" data-modal-toggle="static-modal" data-day="1" data-time="1"  className='text-m text-center mt-4 cursor-pointer timingbtn'>11:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="1" data-time="2" className='text-m text-center mt-4 cursor-pointer timingbtn'>13:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="1" data-time="3" className='text-m text-center mt-4 cursor-pointer timingbtn'>15:00</p>
            </div>
          </div>
          <div className='w-1/4 p-2'>
            <div className='bg-[#163343] text-gray-400 rounded-lg h-48 timeback'>
            <div className='bg-[#163343]  h-16 w-auto rounded-t-lg headtimeback'>
              <p className='text-gray-300 text-[.8rem] font-bold text-center pt-2'>{second.dayname}</p>
              <p className="text-orange-400 text-[10px] text-center time mt-2">{second.datetime}</p>
              
            </div>
            <p data-modal-target="static-modal" data-modal-toggle="static-modal" data-day="2" data-time="1"  className='text-m text-center mt-4 cursor-pointer timingbtn'>11:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="2" data-time="2" className='text-m text-center mt-4 cursor-pointer timingbtn'>13:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="2" data-time="3" className='text-m text-center mt-4 cursor-pointer timingbtn'>15:00</p>
            </div>
          </div>
          <div className='w-1/4 p-2'>
            <div className='bg-[#163343] text-gray-400 rounded-lg h-48 timeback'>
            <div className='bg-[#163343]  h-16 w-auto rounded-t-lg headtimeback'>
              <p className='text-gray-300 text-[.8rem] font-bold text-center pt-2'>{third.dayname}</p>
              <p className="text-orange-400 text-[10px] text-center time mt-2">{third.datetime}</p>
            </div>
            <p data-modal-target="static-modal" data-modal-toggle="static-modal" data-day="3" data-time="1"  className='text-m text-center mt-4 cursor-pointer timingbtn'>11:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="3" data-time="2" className='text-m text-center mt-4 cursor-pointer timingbtn'>13:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="3" data-time="3" className='text-m text-center mt-4 cursor-pointer timingbtn'>15:00</p>
            </div>
          </div>
          <div className='w-1/4 p-2'>
            <div className='bg-[#163343] text-gray-400 rounded-lg h-48 timeback'>
            <div className='bg-[#163343]  h-16 w-auto rounded-t-lg headtimeback'>
              <p className='text-gray-300 text-[.8rem] font-bold text-center pt-2'>{forth.dayname}</p>
              <p className="text-orange-400 text-[10px] text-center time mt-2">{forth.datetime}</p>
            </div>
            <p data-modal-target="static-modal" data-modal-toggle="static-modal" data-day="4" data-time="1"  className='text-m text-center mt-4 cursor-pointer timingbtn'>11:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="4" data-time="2" className='text-m text-center mt-4 cursor-pointer timingbtn'>13:00</p>
            <p data-modal-target="static-modal"  data-modal-toggle="static-modal" data-day="4" data-time="3" className='text-m text-center mt-4 cursor-pointer timingbtn'>15:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
