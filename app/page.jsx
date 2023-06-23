"use client"
import Link from "next/link";
import Company from "./components/company.jsx"

export default function Home() {
    return (
        <div className="w-full  px-10 pt-24 md:p-24" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >

            <div className="w-full flex flex-col justify-center items-center">
                <span className="md:w-3/4 uppercase flex justify-center text-4xl  md:text-6xl leading-tight md:leading-normal font-bold text-center"> we build powerful <br />
                    website with mern-stack.</span>
                <span className="md:w-3/4 pt-5 capitalize flex justify-center text-xl md:text-2xl md:leading-normal text-center">empowering business, startups and brands with the power of
                    MERN-Stack to elevate and spice up their online presence.  </span >
                <div className="py-10 flex justify-center"><Link className="primary_button px-3 py-2 my-2" href="/work">Explore Projects</Link></div>
            </div>
            <Company/>
        </div>
    )
}
