import { AlignEndHorizontalIcon, Calendar, Images, Smile, Video } from "lucide-react";
import Image from "next/image";

const Addpost = () => {
    return ( 
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md flex gap-4 justify-between text-sm">
            {/* avatar */}
            {/* <div className="w-12 h-12 object-cover rounded-full  bg-blue-300"></div> */}
            <Image alt="" width={80} height={80} className="w-12 h-12 object-cover rounded-full" src='https://wallpapers.com/images/high/cyber-background-szefzeenouzjg9bv.webp' />
            {/* post */}
            <div className="flex-1">
                {/* text input */} 
                <div className="flex gap-4">
                    <textarea className="bg-slate-200 dark:bg-slate-600 rounded-xl flex-1 py-2" placeholder="Share Idea !" name="" id=""></textarea>
                    <Smile className="text-amber-400 self-end" />
                </div>
                {/* post OPtion  */}
                <div className="flex items-center justify-end gap-4 mt-4 flex-wrap " >
                    <div className="flex cursor-pointer items-center gap-2 "><Images/>Image</div>
                    <div className="flex cursor-pointer items-center gap-2 "><Video/>Video</div>
                    <div className="flex cursor-pointer items-center gap-2 "><AlignEndHorizontalIcon/>Poll</div>
                    <div className="flex cursor-pointer items-center gap-2 "> <Calendar/>Event</div>
                </div>
            </div>
        </div>
     );
}
 
export default Addpost;