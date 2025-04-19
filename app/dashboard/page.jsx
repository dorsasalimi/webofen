import Image from "next/image"
import React from "react"
import Dashboardcontent from "@/components/panel/dashboardcontent";
import HeaderPanel from "@/components/panel/header";
import { cookies } from 'next/headers';

const getjobs = async (myCookie) => {
    const posts = await fetch(`https://api.webofen.com/api/getjobs/${myCookie}`, { cache: "no-store" });
    return posts.json();
}
const Page = async () => {
    const cookieStore = cookies();
    const myCookie = cookieStore.get('userToken');
    const jobs = await getjobs(myCookie.value);
    console.log(jobs)
    return (
        <div className="bg-white container md:w-4/6 md:mx-auto h-full">
            <HeaderPanel />
            <Dashboardcontent jobs={jobs}/>
        </div>
    );
}
export default Page;

