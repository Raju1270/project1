"use client"
import { motion } from "framer-motion"
import { Adiv } from "./Adiv"
import Link from "next/link"

import { Sansita_Swashed } from 'next/font/google'

const logof = Sansita_Swashed({
  weight: '400',
  subsets: ['latin'],
})
export default function Footer() {
  return (

    <footer className="px-4 md:px-24 pt-20 pb-4">
      <div className="">
        <Adiv>
          <div className="text-4xl md:text-6xl textwrap flex gap-4 items-start mb-4 i">
            <motion.div initial={{ opacity: 0 }} animate={{
              opacity: 1, transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1,
                ease: "linear",
              }
            }} className="w-4 h-4 rounded-full bg-white mt-3 md:mt-5"></motion.div> Let&apos;s make something together
          </div>
        </Adiv>
        <Adiv>
          <div className="text-4xl md:text-6xl text-gray-300 textwrap mb-4 hover-underline-animation ">
            <a href="mailto:mail@rajumaurya.com">mail@rajumaurya.com</a>
          </div>
        </Adiv>
        <div className="mt-20 mb-4 md:text-lg text-xl flex gap-8 flex-col md:flex-row justify-between ">
          <div className="flex flex-col gap-2">
          <Adiv>  <Link className={logof.className + " logo  md:hidden block mb-8"} href="/">
              Raju
            </Link> </Adiv>
            <Adiv> <a className="hover-underline-animation w-fit" href="https://www.instagram.com/rajumaurya_13">Instagram</a> </Adiv>
            <Adiv> <a className="hover-underline-animation w-fit" href="https://www.twitter.com/RajuWebDev">Twitter</a> </Adiv>
            <Adiv> <a className="hover-underline-animation w-fit" href="https://www.linkedin.com/in/raju-maurya-15170b251">Linkedin</a> </Adiv>
            <Adiv>  <a className="hover-underline-animation w-fit" href="https://www.github.com/Raju1270">Github</a> </Adiv>
          </div>
          <div className="flex flex-col gap-2">
          <Adiv>  <Link className="hover-underline-animation w-fit" href={"/"}>Home</Link> </Adiv>
          <Adiv> <Link className="hover-underline-animation w-fit" href={"/work"}>Work</Link> </Adiv>
          <Adiv>  <Link className="hover-underline-animation w-fit" href={"/about"}>About</Link> </Adiv>
            <Adiv> <Link className="hover-underline-animation w-fit" href={"/contact"}>Contact</Link> </Adiv>
          </div>
          <div className="flex flex-col gap-2">
          <Adiv>  <a className="hover-underline-animation w-fit" href="mailto:mail@rajumaurya.com">mail(at)rajumaurya.com</a> </Adiv>
          <Adiv> <a className="hover-underline-animation w-fit" href="tel:+919501235412">+91 9501235412</a> </Adiv>
          </div>
          <div className="flex flex-col gap-8 justify-between">
          <Adiv>  <Link className={logof.className + " logo  hidden md:block"} href="/">
              Raju
            </Link> </Adiv>
            <Adiv>  <span className="text-gray-300">© Raju 2023.</span> </Adiv>
          </div>
        </div>
      </div>
    </footer>
  )
}