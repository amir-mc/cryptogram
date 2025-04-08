import Link from "next/link";
import Profilecard from "./profilecart";
import { Bitcoin, CalendarDays, Image, Images, List, MonitorPlay, MousePointer2, Newspaper, Settings, SquareActivity } from "lucide-react";
import Ad from "./ad";

const Leftbar = ({type}:{type:'user'|'home'}) => {
    return ( 
        <div className="flex flex-col gap-6 ">
            {type==='home' && <Profilecard/> }
            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-4 ">
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <Image/>
                <span>my photo</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <SquareActivity/>
                <span>my activity</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <Bitcoin/>
                <span>market</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <CalendarDays/>
                <span>Events</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <Images/>
                <span>album</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <MonitorPlay/>
                <span>Viedo</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <Newspaper/>
                <span>News</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <MousePointer2/>
                <span>cursor</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <List/>
                <span>List</span>
                </Link>
                <Link href='/' className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-300">
                <Settings/>
                <span>Setting</span>
                </Link>
            </div>
            <Ad size="sm"/>
        </div>
     );
}
 
export default Leftbar;