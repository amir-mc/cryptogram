import { ThumbsUp } from "lucide-react";

const CommentTraction = () => {
    return ( 
        <div className="flex items-center gap-8 text-xm text-gray-500">
                            <div className="flex items-center gap-4">
                                <ThumbsUp className="cursor-pointer"/>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-400">20 Like</span>
                            </div>
                            <div className="cursor-pointer">Reply</div>
                        </div>
     );
}
 
export default CommentTraction;