import Image from "next/image";

const Stories = () => {
    return ( 
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-sm overflow-scroll text-xs scroll-hidd">
            <div className="flex gap-8 w-max ">
                {/* story */} 
                <div className="flex flex-col items-center gap-2 cursor-pointer ">
                    {/* <div className="w-20 h-20 rounded-full ring-2 bg-blue-200"> </div> */}
                    <Image alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-amber-300 bg-blue-200" src='https://wallpapers.com/images/high/cyber-background-szefzeenouzjg9bv.webp' />
                    <span>Test</span>
                </div>
                {/* story */}
                <div className="flex flex-col items-center gap-2 cursor-pointer ">
                     {/* <div className="w-20 h-20 rounded-full ring-2 bg-blue-200"> </div> */}
                     <Image alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2 ring-amber-300 bg-blue-200" src='https://wallpapers.com/images/high/cyber-background-szefzeenouzjg9bv.webp' />
                    <span>Test</span>
                </div>
                
            </div>

        </div>
     );
}
 
export default Stories;