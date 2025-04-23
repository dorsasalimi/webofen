import Link from "next/link";
export default function Services() {
  return (
    <>
    <div className="flex flex-wrap">
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 m-2 md:m-0 shadow-md rounded-xl ">
          <div className="flex">
            <img className="h-24 rounded-full bgset drop-shadow-md " src="/image/services/backlink.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">بک لینک</h4>
              <p className="mt-2 text-xs text-zinc-400">Backlink </p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/backlink" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 m-2 md:m-0 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset2 drop-shadow-md " src="/image/services/security.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">امنیت</h4>
              <p className="mt-2 text-xs text-zinc-400">Website Security</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/security" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/optimize.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">بهینه سازی</h4>
              <p className="mt-2 text-xs text-zinc-400">Optimization</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/optimization" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/cluster.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">کیورد کلاستر</h4>
              <p className="mt-2 text-xs text-zinc-400">Keyword Cluster</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/keyword-cluster" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/newspaper.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">ریپورتاژ آگهی</h4>
              <p className="mt-2 text-xs text-zinc-400">Reportage</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/reportage" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2  shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/content.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">تولید محتوا</h4>
              <p className="mt-2 text-xs text-zinc-400">Content Creation</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
            <Link href="/services/content" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/rankup.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">رنک دامین</h4>
              <p className="mt-2 text-xs text-zinc-400">Rank Domain</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
          <Link href="/services/rankup" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-1  md:w-1/3">
        <div className="bg-white p-2 shadow-md rounded-xl">
          <div className="flex">
            <img className="h-24 rounded-full bgset3 drop-shadow-md " src="/image/services/spamscore.png"></img>
            <div className="pt-5 mr-2">
              <h4 className="text-xl mt2 text-orange-800">اسپم اسکور</h4>
              <p className="mt-2 text-xs text-zinc-400">Spam Score</p>
            </div>
          </div>
          <div className="p-2 text-xs text-justify text-gray-600">
            <p className="leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهو.</p>
          </div>
          <div className="pt-1">
          <Link href="/services/spam-score" className="flex hover:text-orange-800">
              <span className="flex mx-auto p-2 text-xs bg-green-600 text-gray-100 rounded-md  border-2 border-red-300">افزودن به سبد
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
