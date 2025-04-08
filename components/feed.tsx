import Posts from "./post";

const Feed = () => {
    return ( 
        <div className="p-4 bg-white dark:bg-slate-900 rounded-lg shadow-md flex flex-col gap-12 ">
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
        </div>
     );
}
 
export default Feed;