"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export function Adiv({ children }) {
  return (<>
    <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5,delay:0.5, type:"spring"}}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 }
      }}>
      {children}
    </motion.div>
  </>)
}

export function Imgpro({
  src,
  alt,
  duration=0.5
}) {
  return (<>
    <motion.div className="w-96 h-[30rem] overflow-hidden rounded-xl"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     transition={{ duration: duration ,type:"spring" }}
     variants={{
       visible: { opacity: 1, y: 0 },
       hidden: { opacity: 0, y: 100 }
     }}
    >
      <Image src={src} alt={alt} width={800} height={800} loading="lazy" className="w-96 h-[30rem] hover:scale-105 rounded-xl transition" />
    </motion.div>
  </>)
}

export function Navanime({ children }) {
  return (<>
    <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 ,type:"spring"}}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}>
      {children}
    </motion.div>
  </>)
}