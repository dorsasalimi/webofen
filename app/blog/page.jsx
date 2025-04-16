import Header from '@/components/Partials/Header'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pillsec from '@/components/sidebar/pillsec'
const getdata = async () => {
  const data = await fetch("https://api.webofen.com/api/getpostsbycatslug/blog", { cache: "no-store" });
  return data.json();
}
export async function generateMetadata() {
  return {
      title: ``,
      description: '',
      keywords: '',
      charSet: "utf-8",
      applicationName: "",
      generator: "Nextjs",
      robots: {
          index: true,
          follow: true,
          nocache: true,
      }, alternates: {
          canonical: `https://webofen.com/blog`,
      }
  };
}
const blog = async () => {
  const data = await getdata();
  return (
    <main className="min-h-screen">
      <div className="flex container mx-auto py-8 px-44 bg-slate-100">
        <div className="w-2/3 h-[800px] bg-[#f9f8f6]">
          <Header />
          <section className='p-4'>
            <div className='flex justify-between items-center p-3'>
              <h1 className='text-xl'>مقالات</h1>
              <div className='text-gray-600 text-xs'>
                صفحه اصلی / مقالات
              </div>
            </div>
            <div className='flex flex-wrap'>
              {data.posts.map((item, i) => (
                <div className='relative w-1/2 p-1'>
                  <Link href={`blog/${item.title_slug}`}>
                    <Image className="rounded-xl" width={400} height={200} src={`https://api.webofen.com/${item.image_big}`} />
                    <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                      <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                        <h2 className='text-gray-100 leading-7'>{item.title}</h2>
                      </div>
                      <div className='absolute bottom-3 left-5'>
                        <div className='flex items-center'>
                          <span className='text-white p-1'>
                            13
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </div>
                        <div className='flex items-center'>
                          <span className='text-white p-1'>
                            10
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              <div className='relative w-1/2 p-1'>
                <Image className="rounded-xl" width={400} height={200} src="/image/Group-72.png" />
                <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                  <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                    <h2 className='text-gray-100 leading-7'>از سئوی محلی چه مید آیا درست است که این واقعا انید؟!</h2>
                  </div>
                  <div className='absolute bottom-3 left-5'>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        13
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        10
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2 p-1'>
                <Image className="rounded-xl" width={400} height={200} src="/image/Group-72.png" />
                <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                  <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                    <h2 className='text-gray-100 leading-7'>از سئوی محلی چه مید آیا درست است که این واقعا انید؟!</h2>
                  </div>
                  <div className='absolute bottom-3 left-5'>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        13
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        10
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2 p-1'>
                <Image className="rounded-xl" width={400} height={200} src="/image/Group-72.png" />
                <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                  <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                    <h2 className='text-gray-100 leading-7'>از سئوی محلی چه مید آیا درست است که این واقعا انید؟!</h2>
                  </div>
                  <div className='absolute bottom-3 left-5'>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        13
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        10
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2 p-1'>
                <Image className="rounded-xl" width={400} height={200} src="/image/Group-72.png" />
                <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                  <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                    <h2 className='text-gray-100'>از سئوی محلی چه مید آیا واقعا انید؟!</h2>
                  </div>
                  <div className='absolute bottom-3 left-5'>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        13
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        10
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2 p-1'>
                <Image className="rounded-xl" width={400} height={200} src="/image/Group-72.png" />
                <div className='flex items-center rounded-xl absolute h-[60%] hover:h-[80%] hover:opacity-95 transition-all w-[98%] opacity-75 bg-gradient-to-t from-[#000] to-transparent bottom-1'>
                  <div className='absolute flex items-center bottom-5 right-5 w-[70%]'>
                    <h2 className='text-gray-100'>از سئوی محلی چه مید آیا واقعا انید؟!</h2>
                  </div>
                  <div className='absolute bottom-3 left-5'>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        13
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <div className='flex items-center'>
                      <span className='text-white p-1'>
                        10
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-1/3 h-screen sticky top-0 pl-10">
          <Pillsec />
        </div>
      </div>
    </main>
  )
}

export default blog