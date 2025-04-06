import { MoreHorizontal, Smile, ThumbsUp } from "lucide-react";
import CommentTraction from "./commentTraction";

const Comments = () => {
    return (
        <div>
            {/* wwrite */}
            <div className="flex items-center gap-4 ">
                <div className="w-8 h-8 rounded-full bg-blue-200" ></div>    
                <div className="flex flex-1 items-center justify-between rounded-xl px-6 py-2 w-full bg-slate-200">
                    <input type="text" placeholder="Comment" className="bg-transparent outline-none flex-1 " />
                    <Smile className="text-amber-400 " />
                </div>
             </div>
            {/* comments */}
            <div>
                <div className="flex gap-4 justify-between mt-6 ">
                    {/* avatar */}
                    <div className="w-10 h-10 rounded-full bg-blue-200" ></div>   
                     {/* dec */} 
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Testi</span>
                         <p>Proident veniam cillum mollit esse consectetur nulla cupidatat. Proident dolore aute id aute minim deserunt. Ex eiusmod laboris proident minim dolor esse eu exercitation cupidatat sunt eiusmod ipsum occaecat. Esse ea in anim et ea aliquip duis laboris ea pariatur. In aliquip adipisicing eiusmod fugiat nisi ut.</p>
                        <CommentTraction/>
                    </div>
                        <div>
                            {/* icon */}
                            <MoreHorizontal/>
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Comments;