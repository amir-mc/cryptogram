'use client'
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Mobilemenu = () => {
    const [isOpen,setIsopen]=useState(false)
    return ( 
        <div className="md:hidden" onClick={()=>setIsopen((prev)=>!prev)}>
            <div className="flex flex-col gap-[4.5] cursor-pointer">
                <div className={`w-6 h-1 bg-blue-500 rounded-sm origin-left  ease-in-out duration-750 ${isOpen ? "rotate-45":""}`}/>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm  ease-in-out duration-750 ${isOpen ? "opacity-0":""}`}/>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-750 ${isOpen ? "-rotate-45":""}`}/>
            
               
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