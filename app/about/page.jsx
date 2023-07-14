import Image from "next/image";

export default function About() {
    return (

        <main className="w-full p-10 flex flex-col lg:flex-row">
            <section className="w-full ">
                <h2 className=" my-10 text-4xl tracking-tight font-extrabold px-10 ">About Me</h2>
                <div className="flex flex-col-reverse lg:flex-row justify-between px-10">
                    <p className="text-lg font-light w-full lg:w-1/2">

                        Hey, I'm Raju,
                        <br /> <br />
                        I'm a full stack web developer in the MERN stack with over 2 years of experience in the industry. I'm passionate about building scalable and user-friendly web applications using cutting-edge technologies.
                        <br /> <br />
                        I have a strong understanding of both the front-end and back-end of web development. I'm proficient in a variety of programming languages, including HTML, CSS, JavaScript, Sass, Node.js, MongoDB, Express.js, and React.js. I'm also familiar with a number of popular frameworks such as TypeScript, Next.js, Tailwind.
                        <br /> <br />
                        I'm a highly motivated and self-directed individual. I'm always eager to learn new things and take on new challenges. I'm also a team player and I enjoy working with others to solve problems.
                        <br /> <br />
                        I'm looking for a new opportunity where I can use my skills and experience to build innovative and user-friendly web applications.
                    </p>
                    <Image src="/23.png" height={400} width={400} quality={100} loading="lazy" alt="" className="w-full lg:w-1/3 my-10 flex justify-center items-center" ></Image>
                </div>
            </section>
        </main>
    )
}