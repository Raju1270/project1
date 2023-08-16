"use client"
import { motion } from "framer-motion"
export default function Company() {
    return (<>
         <div className="relative w-screen mt-20">
            <motion.div
                className="absolute text-7xl md:text-9xl font-bold whitespace-nowrap uppercase stroke-purple-500 stroke-2"
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