import Image from "next/image";
import data from "./data.json"
export default function () {
    return (<>
        <div className="w-full"> {data.map((props, key) => {
            return (
            <div className="border my-5 rounded-lg p-5">
                <Image src={props.imgurl} alt="project pic" width={300} height={300} />
                <h1 className="text-4xl">{props.title}</h1>
                </div>
                )
        })}

            
        </div>
    </>)
}