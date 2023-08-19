import Image from "next/image";
import { Adiv } from "../components/Adiv"
export default function About() {
    return (<>
        <div className="my-40 mx-4">
            <div className="">
                <Adiv><div className="text-6xl mt-10 w-[66rem] flex " >I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.
                </div></Adiv>
                <div className="text-lg mt-4 w-full md:w-[23rem] lg:w-[28rem] text-gray-500">I am Raju, a Full Stack Web Developer based in Chandigarh, India. With more than 3 year of experience in Web Development and Designing. Currently  working as a Freelancer and pursuing my Masters. </div>
            </div>
        </div>
    </>)
}