import Image from "next/image";
import { Adiv } from "../components/Adiv"
export default function About() {
    return (<>
        <div className="mt-20 mx-4 md:mx-24 lg:mt-48">
            <div className="">
                <Adiv>
                    <div className="text-4xl md:text-6xl w-full" >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.
                    </div>
                </Adiv>
            </div>
            <div className="w-full flex ">
                <div className="w-1/2  hidden md:block"></div>
                <div className="text-lg w-full md:w-[23rem] lg:w-[28rem] text-gray-300 mt-12">
                    <Adiv>
                        I am Raju, a Full Stack Web Developer based in Chandigarh, India. With more than 3 year of experience in Web Development and Designing. Currently working as a Freelancer and pursuing my Masters.
                    </Adiv>
                    <Adiv> <div className="w-full  mt-12 mr-4 relative bg-gradient-to-tl to-white via-purple-500 from-purple-900 rounded-xl flex justify-center items-center">
                        <div className="absolute inset-0 z-10"></div>

                        <Image src="/pic.png" alt="profile" width={600} height={600} loading="lazy" className=" " />

                    </div>  </Adiv>
                </div>
            </div>
            <div className="w-screen px-4 pb-4">
                <Adiv> <div className="text-3xl md:text-4xl w-fit md:my-10 my-10 ">Tech Stack</div></Adiv>
                <Adiv>
                    <div className="flex flex-col my-4 gap-4 text-xl">
                        <p className="border-b pb-2 w-full">NextJS</p>
                        <p className="border-b pb-2 w-full">ReactJS</p>
                        <p className="border-b pb-2 w-full">TypeScript</p>
                        <p className="border-b pb-2 w-full">Tailwind</p>
                        <p className="border-b pb-2 w-full">ExpressJS</p>
                        <p className="border-b pb-2 w-full">NodeJS</p>
                        <p className="border-b pb-2 w-full">MySQL</p>
                        <p className="border-b pb-2 w-full">MongoDB</p>
                        <p className="border-b pb-2 w-full">Framer-Motion</p>
                        <p className="border-b pb-2 w-full">Git</p>
                    </div>
                </Adiv>
            </div>
        </div>
    </>)
}