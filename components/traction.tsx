import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
const TractionPost = () => {
    
    return ( 
        <div className="flex items-center justify-between my-4  ">
                <div className="flex gap-4">
                    <div className="flex items-center gap-4 bg-slate-100  p-2 rounded-xl dark:bg-slate-600 dark:text-black">
                        <ThumbsUp className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 dark:text-black">200 <span className="hidden md:inline  text-gray-500 dark:text-black">Like</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl dark:bg-slate-600 dark:text-black">
                        <MessageCircle className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 dark:text-black">200 <span className="hidden md:inline  text-gray-500 dark:text-black">Comment</span></span>
                    </div>
                </div>
                <div  className="">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl dark:bg-slate-600 dark:text-black">
                        <Share2 className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 dark:text-black">200 <span className="hidden md:inline  text-gray-500">Share</span></span>
                    </div>
                </div>
            </div>
     );
}
 
export default TractionPost;