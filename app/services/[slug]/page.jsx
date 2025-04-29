import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Partials/Header";
import Clinic from "@/components/clinic/motion";
import TimingModal from "@/components/clinic/TimingModal";
import Buy from "@/components/Partials/Buy";
import Reserveup from "@/components/Partials/reservup";
const lastpost = async (slug) => {
  const posts = await fetch(`https://api.webofen.com/api/getpost/${slug}`, { cache: "no-store" });
  return posts.json();
}
const Page = async ({ params }) => {
  const data = await lastpost(params.slug);
  console.log(data);
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex flex-wrap container mx-auto md:py-8 md:px-48 lg:px-48 z-0 relative">
          <div className="md:w-2/3 bg-white w-full rounded-lg  transition-all duration-300 ">
            <Header />
            <section className='p-4'>
              <div className='flex justify-end items-center p-3'>
                <div className='text-gray-600 text-xs'>
                  <ul className="flex flex-wrap leading-5">
                    <ol>
                      <Link className="" href={"/"}>صفحه اصلی</Link> /
                    </ol>
                    <ol>
                      &nbsp; <Link className="" href={"/services"}>خدمات</Link> /
                    </ol>
                    <ol>
                      &nbsp; {data.post.title}
                    </ol>
                  </ul>
                </div>
              </div>
              <div className='bg-white p-4 flex flex-wrap rounded-lg'>
                <div className="w-1/4">
                  <Image className="rounded-[100px]" width={200} height={200} src={`https://api.webofen.com/${data.post.image_big}`} />
                </div>
                <div className="w-3/4 pl-4">
                  <h1 className='text-xl pb-2'>{data.post.title}</h1>
                  <p className="text-sm text-justify leading-6">{data.post.summary}</p>
                  <Buy title={data.post.title} slug={params.slug} />
                </div>
              </div>
              <div className="sm:1/1 pr-4 pl-4 mt-4" dangerouslySetInnerHTML={{ __html: data.post.postcontent }}></div>
            </section>
          </div>
          <div className="md:w-1/3 h-fit md:sticky top-0 p-2 md:p-0 md:pt-1">
            <Reserveup />
          </div>
        </div>
      </main>
    </>
  )
}
export default Page;