import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Partials/Header";
import Reservup from "@/components/Partials/reservup";
const getdata = async () => {
  const data = await fetch(`https://api.webofen.com/api/category/services`, { cache: "no-store" });
  return data.json();
}
export async function generateMetadata() {
  const post_data = await getdata();
  return {
    title: `${post_data.category.name} | وبوفن  `,
    description: post_data.category.description,
    keywords: post_data.category.name,
    charSet: "utf-8",
    applicationName: "وبوفن",
    generator: "Nextjs",
    openGraph: {
      title: `${post_data.category.name} | وبوفن `,
      description: post_data.category.description,
      url: `https://webofen.com/${post_data.category.name_slug}`,
      siteName: 'وبوفن',
      images: [
        {
          url: `https://api.webofen.com/${post_data.category.image_big}`, // Must be an absolute URL
          width: 800,
          height: 600,
        }
      ],
      locale: 'fa_IR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post_data.category.name} | وبوفن `,
      description: post_data.category.description,
      image: `https://api.webofen.com/${post_data.category.image_big}`
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    }, alternates: {
      canonical: `https://webofen.com/${post_data.category.name_slug}`,
    }
  };
}
const Page = async ({ params }) => {
  const data = await getdata(params.category);
  console.log(data);
  return (
    <>
      <main className="min-h-screen bg-slate-100">
        <div className="flex flex-wrap container mx-auto md:py-8 md:px-44">
          <div className="md:w-2/3 w-full h-[auto] bg-[#f9f8f6]">
            <Header />
            <section className='p-4'>
              <div className=' justify-between items-center p-3 text-center'>
                <h1 className="md:text-2xl font-bold md:py-8 sm:w-1/1 pr-4">{data.category.name}</h1>
              </div>
              <div>
                <div className="sm:1/1 pr-4 pl-4" dangerouslySetInnerHTML={{ __html: data.category.topcontent }}></div>
                <div className="sm:1/1 pr-4 pl-4 mt-4" dangerouslySetInnerHTML={{ __html: data.category.postcontent }}></div>
              </div>
              <div className='flex flex-wrap'>
                {data.posts.map((item, index) => (
                   <div key={index} className="w-full md:w-1/2 p-2 mb-4">
                   <div className=" bg-white  rounded-tr-[50px]">
                     <div className="flex">
                       <Image className="rounded-[50px]" width={100} height={100} src={`https://api.webofen.com/${item.image_big}`}/>
                       <div>
                         <h2 className="text-lg pt-5 pb-1 pr-3">{item.title}</h2>
                         <span className="text-sm text-gray-700 p-3">افزایش اعتبار دامنه و بهبود رنک وبسایت</span>
                       </div>
                     </div>
                     <div className="text-xs py-2 px-8 text-gray-500 text-justify leading-6">
                       <p>بک لینک چیست و چرا باید بک لینک بگیریم؟</p>
                       <p>داشتن بک لینک یکی از روش های افزایش اعتبار دامنه و قدرت دامنه در رنک گوگل است پس بهتر است که برای محتواهای تولید شده در وبسایت از انواع محختلف بک لینک استفاده کنیم تا بتونیم میزان اعتبار محتوا و دامنه اصلی را افزایش دهیم.</p>
                     </div>
                     <Link href={`/services/${item.title_slug}`}><button className="block w-full text-center bg-blue-800 text-white mt-2 py-2 text-sm">بیشتر بخوانید ...</button></Link>
                   </div>
                 </div>
                ))}
              </div>
            </section>
          </div>

          <Reservup/>

        </div>
      </main>
    </>
  )
}
export default Page;