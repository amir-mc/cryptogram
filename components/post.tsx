import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";
import TractionPost from "./traction";
import Comments from "./comments";

const Posts = () => {
    return ( 
        <div>
            {/* user */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className=" bg-blue-200 w-10 h-10  rounded-full">   </div>
                        <span>testi</span>
                 
                </div>
                <MoreHorizontal/>
            </div>
            {/* description */}
            <div className="flex flex-col gap-4 ">
                <div className="w-full min-h-96 relative mt-2 bg-blue-100">
                        <div className="object-cover rounded-md"></div>
                </div>
                <p>Exercitation officia aliqua duis est. Aute veniam deserunt cillum est proident. Laboris et qui do occaecat. Eu officia non laborum commodo commodo adipisicing minim duis occaecat do. Dolore deserunt nostrud labore elit proident. Ullamco Lorem reprehenderit proident aute.</p>
            </div>
            {/* interaction */}
            <TractionPost/>
            <Comments/>
        </div>
     );
}
 
export default Posts;