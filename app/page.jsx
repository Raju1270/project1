import Company from "./components/company"
import Badge from "./components/Badge"
import { Adiv, Imgpro } from "./components/Adiv"

import Link from "next/link";
import Image from "next/image.js";

export default function Home() {

    return (<>

        <div className="flex flex-col-reverse md:flex-row w-screen mb-8 md:mb-20">
            <div className="w-screen md:w-1/2 px-4 flex justify-center items-center pt-20 ">
                <Adiv> <Badge /></Adiv>
            </div>
            <div className="w-screen md:w-1/2 px-4 ">
                <Adiv> <div className="w-full md:w-[23rem] lg:w-96 mt-20 mr-4 relative bg-gradient-to-tl to-white via-purple-500 from-purple-900 rounded-xl flex justify-center items-center">
                    <div className="absolute inset-0 z-10"></div>

                    <Image src="/pic.png" alt="profile" width={300} height={300} loading="lazy" className=" " />

                </div>  </Adiv>
                <Adiv><div className="text-4xl mt-8 w-fit " >Hi, I&apos;m Raju </div></Adiv>
                <Adiv><div className="text-lg mt-4 w-full md:w-[23rem] lg:w-[28rem] text-gray-400">Elevate your brand in the modern world with my expertise in development, strategy, and technology. </div></Adiv>

            </div>
        </div>

        <div className="  w-screen px-4 ">
            <Adiv> <div className="text-3xl md:text-4xl w-fit py-8 md:mb-10 mb-6 ">Featured Project</div></Adiv>
            <div className="flex justify-evenly items-center flex-col md:flex-row gap-8 md:gap-0 mx-4">
                <Imgpro src="/download.png" alt="project1" duration={0.5} />
                <Imgpro src="/download.png" alt="project1" duration={1} />
                <Imgpro src="/download.png" alt="project1" duration={1.5} />
            </div>

        </div>
        <div className=" w-screen relative px-10 pt-24 bg-gray-600"  >
            <svg
                className="star absolute top-20 left-52 opacity-[0.5]f invisible lg:visible fill-purple-400"
                width="119"
                height="134"
                viewBox="0 0 89 114"
            >
                <path
                    d="M44.5 0L46.5948 16.8652C49.0848 36.9114 64.3837 52.9193 84.1901 56.2026L89 57L84.1901 57.7974C64.3837 61.0807 49.0848 77.0886 46.5948 97.1348L44.5 114L42.4052 97.1348C39.9152 77.0886 24.6163 61.0807 4.8099 57.7973L0 57L4.80991 56.2026C24.6163 52.9193 39.9152 36.9114 42.4052 16.8652L44.5 0Z"

                />
            </svg>
            <svg
                className="star absolute top-96 right-52 opacity-[0.5]f invisible lg:visible fill-purple-400"
                width="80"
                height="114"
                viewBox="0 0 89 114"
            >
                <path
                    d="M44.5 0L46.5948 16.8652C49.0848 36.9114 64.3837 52.9193 84.1901 56.2026L89 57L84.1901 57.7974C64.3837 61.0807 49.0848 77.0886 46.5948 97.1348L44.5 114L42.4052 97.1348C39.9152 77.0886 24.6163 61.0807 4.8099 57.7973L0 57L4.80991 56.2026C24.6163 52.9193 39.9152 36.9114 42.4052 16.8652L44.5 0Z"

                />
            </svg>

            <div className="w-full flex flex-col justify-center items-center md:my-20">
                <Adiv> <span className="lg:w-full uppercase flex justify-center text-4xl  lg:text-6xl leading-tight lg:leading-normal font-bold text-center"> we build powerful <br />
                    website with mern-stack.</span></Adiv>
                <Adiv><span className="lg:w-full pt-5 capitalize flex justify-center text-xl lg:text-3xl text-gray-300 md:px-40 lg:leading-normal text-center">empowering business, startups and brands with the power of
                    MERN-Stack to elevate and spice up their online presence.</span ></Adiv>
                <Adiv><div className="py-10 flex justify-center">
                    <Link className="primary_button px-4 py-3 my-2 flex items-center gap-2  " href="/work">Explore Projects
                        <svg className="" width="51" height="16" fill="white" viewBox="0 0 51 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z" />
                        </svg>
                    </Link>
                </div></Adiv>
            </div>

        </div> <Adiv>  <Company /></Adiv></>
    )
}
