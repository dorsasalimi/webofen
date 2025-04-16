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
}
export default async function Home() {
  const posts = await lastpost();


  return (
    <main className="min-h-screen bg-slate-100  ">
      <div className="flex flex-wrap container mx-auto md:py-8 md:px-44 z-0">
        <div className="md:w-2/3 bg-[#f9f8f6] w-full ">
          <Header />
          <div className="container overflow-hidden p-4">
            <Sliderbox />
          </div>
          <div className="container">
            <h2 className="text-xl px-4">خدمات وبوفن</h2>
            <div className="container flex flex-wrap p-2">
              <Services />
            </div>
          </div>
          <div className="container mt-4">
            <div className="flex justify-between px-4">
              <h2 className="text-xl">جدیدترین اخبار و مقالات</h2>
              <Link className="mt-1" href={"/blog"} title="مشاهده اخبار">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </Link>
            </div>
            <div className="container flex flex-wrap p-4">
              <Blogcar posts={posts.posts}/>
            </div>
          </div>
          <div className="container mt-4">
            <div className="flex justify-between px-4">
              <h2 className="text-xl">ویدئوهای آموزشی</h2>
              <Link className="mt-1" href={"#"} title="مشاهده ویدئوها">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </Link>
            </div>
            <div className="container flex flex-wrap p-4">
              <Videocar />
            </div>
          </div>
          <div className="container">
            <h2 className="text-xl px-4">داستان ما</h2>
            <div className="container flex flex-wrap p-4">
              <p>
                وبوفن یک فروشگاه ماژولار خدمات سئو است که مطابق با نیاز مشتریان پکیج های مفیدی را برای بهینه سازی به شما معرفی می کند. این سامانه به صاحبان کسب و کار قدرت انتخاب می دهد تا مسیر رشد و پیشرفت خودشان را مدیریت کنند و با دریافت مشاوره از تیم ما بهترین گزینه را برای رسیدن به اهداف خودشان انتخاب کنند. اما چرا وبوفن؟!
              </p>
            </div>
            <div className="container flex p-4">
              <div className="w-1/2">
                <p>فرآیند سئو در مسیر وبوفن:</p>
                <ul className="leading-10 text-sm">
                <li>1- ویزیت وبسایت و آماده سازی مشکلات و ایرادات فنی موجود</li>
                <li>2- جلسه مشاوره و ارائه گزارشات کامل و تجویز نسخه</li>
                <li>3- خرید قرص های تجویز شده کارشناسان</li>
                <li>4- مصرف به موقع قرص ها مطابق با دستور کارشناس</li>
                <li>5- دریافت گزارش فعالیت های انجام شده در پنل کاربری</li>
                </ul>
              </div>
              <div className="w-1/2">
                <Image className="rounded-lg" src={"/image/webofen-algo.webp"} width={350} height={200}/>
              </div>
            </div>
          </div>
        </div>
        <Reserveup/>
      </div>
    </main>
  );
}
