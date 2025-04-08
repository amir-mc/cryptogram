import Image from "next/image";
import Link from "next/link";

const Usermedia = ({userId}:{userId?:string}) => {
    return ( 
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between gap-2" > 
                <span className="text-gray-400">User Media</span>
                <Link href='/' className="text-blue-500">
                    see All
                </Link>
                
            </div>
            <div className="flex flex-wrap  col-4 items-center justify-center gap-2 ">
                    <div className="relative w-1/5 h-24">
                   <Image alt="" fill className="object-cover rounded-md" src='https://wallpapers.com/images/high/stock-market-world-map-3pkfoe2j58b9lkfo.webp' />
            
                   </div>

                </div>
        </div>
     );
}
 
export default Usermedia;