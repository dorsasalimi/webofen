import Header from '@/components/Partials/Header'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Comment from '@/components/Partials/Comment'
import FAQ from '@/components/Partials/Faq'
const lastpost = async (slug) => {
  const posts = await fetch(`https://api.webofen.com/api/getpost/${slug}`, { cache: "no-store" });
  return posts.json();
}
const page = async ({ params }) => {
  const data = await lastpost(params.slug);
  console.log(data.faq);
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="flex flex-wrap container mx-auto md:py-8 md:px-44">
        <div className="md:w-2/3 bg-[#f9f8f6] w-full ">
          <Header />
          <article>
            <div className='flex justify-between items-center p-3'>
              <h1 className='text-xl'>{data.post.title}</h1>
              <div className='text-gray-600 text-xs'>
                <ul className="flex flex-wrap leading-5">
                  <ol>
                    <Link className="" href={"/"}>صفحه اصلی</Link> /
                  </ol>
                  <ol>
                    &nbsp; <Link className="" href={"/blog"}>مقالات</Link> /
                  </ol>
                  <ol>
                    &nbsp; {data.post.title}
                  </ol>
                </ul>
              </div>
            </div>
            <div className='relative m-2'>
              <Image className=" rounded-xl" width={800} height={400} src={`https://api.webofen.com/${data.post.image_big}`} />
              <div className='flex items-center rounded-xl absolute h-[50%] w-[100%] opacity-85 bg-gradient-to-t from-[#000] to-transparent bottom-0'>
                <div className='absolute flex items-center bottom-5 right-5 '>
                  <Image className='rounded-[100px] border-zinc-100 border-2' width={80} height={80} src="/image/moradi.jpg"/>
                  <div className='mr-4'>
                    <span className='text-gray-100 block text-sm'>یونس مرادی</span>
                    <span className='text-gray-100 block mt-2 text-sm'>امتیاز متخصص سئو</span>
                    <span className='flex mt-2 '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='absolute items-center bottom-5 left-5'>
                  <div className='flex justify-end mb-1'>
                    <span className='flex text-white text-sm items-center'>
                      13
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#ffff" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div className='flex justify-end mb-1'>
                    <span className='text-white'>
                      10
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <div className='flex'>
                    <span className='flex text-white text-sm items-center'>
                      <span>1403-03-08</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className='p-3'>
              <p className='p-3 m-2 bg-[#0063af] text-white rounded-xl'><span className='font-bold'>خلاصه:</span> {data.post.summary}</p>
              <div dangerouslySetInnerHTML={{ __html: data.post.postcontent }}>
              </div>
              {data.faq ? <FAQ data={data.faq} /> : ''}
            </div>
          </article>
          <Comment/>
        </div>
        <div className="md:w-1/3 bg-white h-screen sticky top-0 md:pl-10">
          <div className="mobile">
            <div className=" p-5 m-3 rounded-lg relative ">
              <div>
                <p>فهرست مطالب مطرح شده:</p>
                <ul className="list-disc text-zinc-700 p-4 leading-7 text-[.8rem]">
                  {data.heading ? data.heading.map((item, i) => (
                    <li key={i} className={item.htag}>
                      <Link className="text-blue-800" href={`#${item.link}`}>{item.text}</Link>
                    </li>
                  )) : ''}
                  <li>
                    <Link className="text-blue-800" href={`#faq`}>سوالات متداول</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page