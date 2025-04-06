import { MessageCircle, Share2, ThumbsUp } from "lucide-react";
const TractionPost = () => {
    
    return ( 
        <div className="flex items-center justify-between my-4 ">
                <div className="flex gap-4">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <ThumbsUp className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">200 <span className="hidden md:inline  text-gray-500">Like</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <MessageCircle className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">200 <span className="hidden md:inline  text-gray-500">Comment</span></span>
                    </div>
                </div>
                <div  className="">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Share2 className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">200 <span className="hidden md:inline  text-gray-500">Share</span></span>
                    </div>
                </div>
            </div>
     );
}
 
export default TractionPost;