import { Briefcase, BriefcaseBusiness, Calendar, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";

const UserInfo = ({userId}:{userId?:string}) => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* top */}
        <div className="flex items-center justify-between gap-2" > 
            <span className="text-gray-400">UserInfo</span>
            <Link href='/' className="text-blue-500">
                see All
            </Link>
        </div>
        {/* Down */}
        <div className="flex flex-col gap-4 text-gray-500 ">
            <div className="flex items-center gap-2 ">
                <span>testi</span>
                <span className="text-gray-400">@testi</span>
            </div>
            <p>Veniam pariatur eiusmod anim enim nisi magna amet enim ipsum excepteur ullamco tempor cupidatat laborum.</p>
            <div className="flex items-center gap-2">
                <MapPin/>
                <span>test</span>
            </div>
            <div className="flex items-center gap-2">
                <GraduationCap/>
                <span>test</span>
            </div>
            <div className="flex items-center gap-2">
                <BriefcaseBusiness/>
                <span>test</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex  gap-2 ">
                <Link href='/' className="text-blue-500">Test.com</Link>
                </div>
                <div className="flex items-center   gap-2 ">
                    <Calendar/>
                    <span className="text-gray-500 font-bold"> Joined OCT 2012</span>           
                </div>
               
            </div>
        
                <button className=" bg-blue-500 rounded-xl py-2 px-1 text-white">Following</button>
                <span className="self-end text-red-500 cursor-pointer">
                    Block
                </span>
        </div>
    </div>
     );
}
 
export default UserInfo;