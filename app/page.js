import Image from "next/image";
import Link from "next/link";
import Sliderbox from "@/components/slider/Sliderbox";
import Services from "@/components/services/services";
import Blogcar from "@/components/carousel/blogcar";
import Videocar from "@/components/carousel/videocar";
import Header from "@/components/Partials/Header";
import Reserveup from "@/components/Partials/reservup";

const lastpost = async () => {
  const posts = await fetch("https://api.webofen.com/api/getlastpost/6/blog", { cache: "no-store" });
  return posts.json();
};

export default async function Home() {
  const posts = await lastpost();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      <div className="flex flex-wrap container mx-auto md:py-8 md:px-36 lg:px-44 z-0 relative">
        <div className="md:w-2/3 bg-white w-full rounded-lg shadow-md transition-all duration-300 ">
          <Header />
          <div className="container overflow-hidden p-4">
            <Sliderbox />
          </div>
          <div className="container">
            <h2 className="text-xl px-4 text-[#252476]">خدمات وبوفن</h2>
            <div className="container flex flex-wrap p-2">
              <Services />
            </div>
          </div>
          <div className="container my-12 px-4 md:px-6">
      <div className="flex items-center mb-4">
      <div className="w-0.5 h-6 bg-blue-600 rounded-full mr-3 ml-2"></div>
      <h2 className="text-2xl font-bold text-gray-800">داستان ما</h2>
      </div>
      <div className="container bg-blue-50 rounded-lg p-6 mb-6">
        <p className="text-gray-700 leading-relaxed">
          وبوفن یک فروشگاه ماژولار خدمات سئو است که مطابق با نیاز مشتریان پکیج های مفیدی را برای بهینه سازی به شما معرفی می کند. این سامانه به صاحبان کسب و کار قدرت انتخاب می دهد تا مسیر رشد و پیشرفت خودشان را مدیریت کنند و با دریافت مشاوره از تیم ما بهترین گزینه را برای رسیدن به اهداف خودشان انتخاب کنند. اما چرا وبوفن؟!
        </p>
      </div>
      <div className="container flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">فرآیند سئو در مسیر وبوفن:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5">1</span>
              <span>ویزیت وبسایت و آماده سازی مشکلات و ایرادات فنی موجود</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5">2</span>
              <span>جلسه مشاوره و ارائه گزارشات کامل و تجویز نسخه</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5">3</span>
              <span>خرید قرص های تجویز شده کارشناسان</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5">4</span>
              <span>مصرف به موقع قرص ها مطابق با دستور کارشناس</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center bg-blue-600  text-white rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5">5</span>
              <span>دریافت گزارش فعالیت های انجام شده در پنل کاربری</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              className="rounded-lg"
              src="/image/webofen-algo.webp"
              width={400}
              height={250}
              alt="فرآیند سئو در وبوفن"
            />
          </div>
        </div>
      </div>
    </div>
          <div className="container mt-10">
            <span className="w-2/3 h-1 bg-black "></span>
            <div className="flex justify-between px-4 mb-6">
              <div className="flex items-center ">
            <div className="w-0.5 h-6 bg-blue-600 rounded-full mr-3 ml-2"></div>
              <h2 className="text-xl text-[#252476] ">جدیدترین مقالات</h2>
              </div>
              <a href="/blog" class="relative inline-flex items-center px-8 pr-3 overflow-hidden text-sm text-indigo-600 border-1 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute right-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                <span class="absolute left-2 flex items-center justify-end w-6 h-6 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M441.751 475.584 222.166 256 441.75 36.416a21.33 21.33 0 0 0 4.629-23.253C443.094 5.184 435.286 0 426.667 0H320.001a21.24 21.24 0 0 0-15.083 6.251L70.251 240.917c-8.341 8.341-8.341 21.824 0 30.165l234.667 234.667A21.239 21.239 0 0 0 320.001 512h106.667c8.619 0 16.427-5.184 19.712-13.163a21.33 21.33 0 0 0-4.629-23.253z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span class="relative">مشاهده مقالات</span>
              </a>
            </div>
            <div className="container pt-12 pb-20 flex flex-wrap p-8 bg-gradient-to-b from-white from- via-red-50 via- to-white  ">
              <Blogcar posts={posts.posts} />
            </div>
          </div>
          <div className="container ">
            <div className="flex justify-between px-4 mb-6">
              <div className="flex items-center ">
            <div className="w-0.5 h-6 bg-blue-600 rounded-full mr-3 ml-2"></div>
              <h2 className="text-xl text-[#252476] ">ویدئوهای آموزشی</h2>
              </div>
              <a href="/videos" class="relative inline-flex items-center px-8 pr-3 overflow-hidden text-sm text-indigo-600 border-1 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span class="absolute right-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                <span class="absolute left-2 flex items-center justify-end w-6 h-6 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
                  <svg className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M441.751 475.584 222.166 256 441.75 36.416a21.33 21.33 0 0 0 4.629-23.253C443.094 5.184 435.286 0 426.667 0H320.001a21.24 21.24 0 0 0-15.083 6.251L70.251 240.917c-8.341 8.341-8.341 21.824 0 30.165l234.667 234.667A21.239 21.239 0 0 0 320.001 512h106.667c8.619 0 16.427-5.184 19.712-13.163a21.33 21.33 0 0 0-4.629-23.253z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span class="relative">مشاهده ویدئو ها</span>
              </a>
            </div>
            <div className="container flex flex-wrap p-4  ">
              <Videocar />
            </div>
          </div>
       
        </div>
        <Reserveup />
      </div>
    </main>
  );
}
