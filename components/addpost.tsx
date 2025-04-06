import { AlignEndHorizontalIcon, Calendar, Image, Smile, Video } from "lucide-react";

const Addpost = () => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
            {/* avatar */}
            <div className="w-12 h-12 object-cover rounded-full  bg-blue-300"></div>
            {/* post */}
            <div className="flex-1">
                {/* text input */}
                <div className="flex gap-4">
                    <textarea className="bg-slate-200 rounded-xl flex-1 py-2" placeholder="SL" name="" id=""></textarea>
                    <Smile className="text-amber-400 self-end" />
                </div>
                {/* post OPtion  */}
                <div className="flex items-center justify-end gap-4 mt-4 flex-wrap " >
                    <div className="flex cursor-pointer items-center gap-2 "><Image/>Image</div>
                    <div className="flex cursor-pointer items-center gap-2 "><Video/>Video</div>
                    <div className="flex cursor-pointer items-center gap-2 "><AlignEndHorizontalIcon/>Poll</div>
                    <div className="flex cursor-pointer items-center gap-2 "> <Calendar/>Event</div>
                </div>
            </div>
        </div>
     );
}
 
export default Addpost;