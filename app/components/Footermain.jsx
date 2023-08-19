"use client"
import { motion } from "framer-motion"
import { Adiv } from "./Adiv"
export default function Footer() {
  return (

    <footer className="p-4 lg:p-10">
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
          <div className="text-4xl md:text-6xl text-gray-300 textwrap mb-4">
            <a href="mailto:mail@rajumaurya.com">mail@rajumaurya.com</a>
          </div>
        </Adiv>

        <p className="my-4 ">
          Made By Raju Created with fire
        </p>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Raju.</span>
      </div>


    </footer>
  )
}