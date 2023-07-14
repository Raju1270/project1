"use client"
import Link from "next/link";
import Company from "./components/company.jsx"

export default function Home() {
    return (
        <div className="relative w-full  px-10 pt-24 md:p-24" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >
            <svg
                className="star absolute top-6 left-52 opacity-[0.5] invisible lg:visible fill-purple-400"
                width="119"
                height="134"
                viewBox="0 0 89 114"
            >
                <path
                    d="M44.5 0L46.5948 16.8652C49.0848 36.9114 64.3837 52.9193 84.1901 56.2026L89 57L84.1901 57.7974C64.3837 61.0807 49.0848 77.0886 46.5948 97.1348L44.5 114L42.4052 97.1348C39.9152 77.0886 24.6163 61.0807 4.8099 57.7973L0 57L4.80991 56.2026C24.6163 52.9193 39.9152 36.9114 42.4052 16.8652L44.5 0Z"
                    
                />
            </svg>
            <svg
                className="star absolute top-[45%] right-52 opacity-[0.5] invisible lg:visible fill-purple-400"
                width="80"
                height="114"
                viewBox="0 0 89 114"
            >
                <path
                    d="M44.5 0L46.5948 16.8652C49.0848 36.9114 64.3837 52.9193 84.1901 56.2026L89 57L84.1901 57.7974C64.3837 61.0807 49.0848 77.0886 46.5948 97.1348L44.5 114L42.4052 97.1348C39.9152 77.0886 24.6163 61.0807 4.8099 57.7973L0 57L4.80991 56.2026C24.6163 52.9193 39.9152 36.9114 42.4052 16.8652L44.5 0Z"
                    
                />
            </svg>

            <div className="w-full flex flex-col justify-center items-center">
                <span className="md:w-3/4 uppercase flex justify-center text-4xl  md:text-6xl leading-tight md:leading-normal font-bold text-center"> we build powerful <br />
                    website with mern-stack.</span>
                <span className="md:w-3/4 pt-5 capitalize flex justify-center text-xl md:text-2xl md:leading-normal text-center">empowering business, startups and brands with the power of
                    MERN-Stack to elevate and spice up their online presence.  </span >
                <div className="py-10 flex justify-center">
                    <Link className="primary_button px-4 py-3 my-2 flex items-center gap-2 " href="/work">Explore Projects
                        <svg className="" width="51" height="16" fill="white" viewBox="0 0 51 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z" />
                        </svg>
                    </Link>
                </div>
            </div>
            <Company />
        </div>
    )
}
