'use client'
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Mobilemenu = () => {
    const [isOpen,setIsopen]=useState(false)
    return ( 
        <div className="" onClick={()=>setIsopen((prev)=>!prev)}>
            <div className="flex flex-col gap-[4.5] cursor-pointer">
                <div className="w-6 h-1 bg-blue-500 rounded-sm"/>
                <div className="w-6 h-1 bg-blue-500 rounded-sm"/>
                <div className="w-6 h-1 bg-blue-500 rounded-sm"/>
               
            </div>
            {isOpen && (
                <div className="absolute left-0 top-24 w-full h-[200px] bg-white flex flex-col items-center justify-between gap-5 font-medium text-xl z-10">
                    <Link href='/'>
                    <Home/>
                    </Link>
                    <Link href='/'>
                    Friends
                    </Link>
                    <Link href='/'>
                   Login
                    </Link>
                </div>
            )}
        </div>
     );
}
 
export default Mobilemenu;