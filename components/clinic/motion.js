'use client'
import { useCallback, useEffect } from 'react'
import Reservation from './reservation';
export default function Clinic() {
  let pervscroll;
  const onScroll = useCallback(event => {
    if (pervscroll < scrollY) {
      let sun = document.getElementById("sun");
      let bg = document.getElementById("bg");
      let clinic = document.getElementById("clinic");
      let lights = document.getElementById("lights");
      document.getElementById("rotation").classList.add('rotating');
      sun.style.top = window.scrollY / 10 + 10 + "px";
      sun.style.left = window.scrollY / 8 + 5 + "px";
      bg.style.backgroundPositionX = "-" + window.scrollY / 6 - 5 + "px";
      clinic.style.opacity = window.scrollY / 1500;
      if (window.scrollY > 1100) {
        lights.style.display = "block";
        lights.classList.add("lightin");
      }
      console.log(bg.style.backgroundPositionX);
    } else {
      console.log(window.scrollY);
      sun.style.top = window.scrollY / 10 + 10 + "px";
      sun.style.left = window.scrollY / 8 + 5 + "px";
      bg.style.backgroundPositionX = "-" + window.scrollY / 6 - 5 + "px";
      clinic.style.opacity = window.scrollY / 1500;
      if (window.scrollY < 1100) {
        lights.style.display = "none";
      }
      console.log(bg.style.backgroundPositionX);
    }
    pervscroll = scrollY;
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);
  return (
    <>
      <div id="bg" className="relative bgcontrol">
        <img src="/image/area.png" />
        <img src="/image/sidecalc.png" className="absolute top-0 z-20" />
        <img id="clinic" src="/image/clinic2.png" className="absolute top-0 z-20" />
        <img id="lights" src="/image/lights.png" className="absolute none top-0 z-20" />
        <img id="rotation" src="/image/trees.png" className="absolute top-2 z-10 transition-all ease-linear duration-100" />
        <img src="/image/tree1.png" className="absolute top-2 z-10" />
        <img id="sun" src="/image/sun.png" className="absolute z-0 top-2 w-20 left-2 " />
      </div>
        <Reservation/>
      

    </>
  );
}
