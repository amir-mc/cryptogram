import { CheckSquare, X } from "lucide-react";
import Link from "next/link";

const FriendsRequest = () => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between gap-2" > 
                <span className="text-gray-400">Friend Request</span>
                <Link href='/' className="text-blue-500">
                    see All
                </Link>
            </div>
            {/* User */}
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4" > 
                 <div className="rounded-full h-10 w-10 object-cover bg-blue-300"></div>
                    <span>testi</span> 
                </div>
                <div className="flex gap-2 justify-end ">
                    <CheckSquare className="cursor-pointer"/>
                    <X className="cursor-pointer"/>
                </div>
            
            </div>
            {/* User */}
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4" > 
                 <div className="rounded-full h-10 w-10 object-cover bg-blue-300"></div>
                    <span>testi</span> 
                </div>
                <div className="flex gap-2 justify-end ">
                    <CheckSquare className="cursor-pointer"/>
                    <X className="cursor-pointer"/>
                </div>
            
            </div>
            {/* User */}
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4" > 
                 <div className="rounded-full h-10 w-10 object-cover bg-blue-300"></div>
                    <span>testi</span> 
                </div>
                <div className="flex gap-2 justify-end ">
                    <CheckSquare className="cursor-pointer"/>
                    <X className="cursor-pointer"/>
                </div>
            
            </div>
        </div>  
     );
}
 
export default FriendsRequest;