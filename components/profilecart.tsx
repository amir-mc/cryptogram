const Profilecard = () => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6 ">
            <div className="h-20 relative bg-green-400 ">
                <div className=" bg-green-400"></div>
                <div className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white bg-blue-300 z-10 object-cover"></div>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span>testi</span>
                <div className="flex items-center gap-4 ">
                    <div className="flex ">
                      <span>Followers </span>
                    </div>
                    
                </div>
                <button className="bg-blue-500 py-2 px-1 text-white rounded-xl">My profile</button>
            </div>
        </div>
     );
}
 
export default Profilecard;