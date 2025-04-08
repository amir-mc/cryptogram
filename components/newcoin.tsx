import { Bitcoin, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewCoin = () => {
    return ( 
        <div className="p-4 bg-white  dark:bg-slate-900 rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between gap-2" > 
                <span className="text-gray-400">New Coin Lunch</span>
                <Link href='/' className="text-blue-500">
                    see All
                </Link>
            </div>
             {/* User */}
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4" > 
                 {/* <div className="rounded-full h-10 w-10 object-cover bg-blue-300"></div> */}
                     <Image alt="" width={80} height={80} className="rounded-full h-10 w-10 object-cover" src='https://wallpapers.com/images/high/ethereum-pink-floyd-inspired-0lf8irh0c2wiw5d1.webp' />
                    <span>testi</span> 
                </div>
                <div className="flex gap-2 justify-end ">
                    <button className="rounded-xl bg-blue-600 font-medium text-white px-2 py-1 ">Support</button>
                </div>
            
            </div>
        {/* all coin */}
            <div className="p-4 bg-slate-200  dark:bg-slate-600 dark:text-black  rounded-lg flex items-center gap-4 ">
                <Bitcoin/>
                <Link href='/' className="flex flex-col gap-1 text-xs">
                    <span className="">
                        All
                    </span>
                    <span className="">
                        see all 10 coin lunch
                    </span>
                </Link>
            </div>           
        </div>  
     );
}
 
export default NewCoin;