import { MoreHorizontal } from "lucide-react";

const Ad = ({size}:{size:"sm"|"md"|"lg"}) => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* up */}
            <div className="flex  items-center justify-between gap-3 ">
                <span>Sponser Ad.</span>
                <MoreHorizontal className="corsur-pointer "/>
            </div>
            {/* botton */}
            <div className={`flex flex-col mt-4 ${size==="sm"?"gap-2":"gap-4"}`}>
                <div className={`relative w-full bg-blue-300 ${size==="sm"?"h-24":size==="md"?"h-36":"h-48"}`}>
                    <div className="object-cover rounded-xl "></div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-2">
                <p className="text-gray-400">Adipisicing quis tempor nisi sit quis excepteur consequat consectetur. Tempor occaecat tempor .</p>
                <button className="py-2 px-2 rounded-xl bg-gray-200 ">Learn more</button>
            </div>
        </div>
     );
}
 
export default Ad;