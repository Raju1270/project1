import Image from "next/image";
import data from "./data.json"
export default function projectfield() {
    return (<>
        <div className="w-full flex flex-col lg:flex-row gap-5 "> {data.map((props, key) => {
            return (
                <div key={key} className="card border my-5 rounded-lg p-5 flex flex-col gap-3">
                    <Image src={props.imgurl} alt="project pic" width={300} height={300} />
                    <h1 className="text-4xl">{props.title}</h1>
                    <p className="font-light text-lg">{props.desc}</p>
                    <span className="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-6">{props.techstack.map((a, key) => { return (<span key={key}>{a}</span>) })}</span>
                </div>
            )
        })}


        </div>
    </>)
}