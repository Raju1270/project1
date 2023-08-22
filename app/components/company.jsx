"use client"
import { motion } from "framer-motion"
export default function Company() {
    return (<>
         <div className=" block w-screen overflow-x-hdden h-fit mb-20 ">
            <motion.div
                className=" text-7xl md:text-9xl font-bold whitespace-nowrap uppercase stroke-purple-500 stroke-2 stroq "
                animate={{
                    x: [0, -4000],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                      },
                    },
                  }}
            >
                <h1>
                    Let's Work Together. Let's Work Together. Let's Work Together. Let's
                    Work Together. Let's Work Together. Let's Work Together. Let's Work
                    Together
                </h1>
            </motion.div>
            </div>
    </>)
}