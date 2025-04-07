import Link from "next/link";

const Usermedia = ({userId}:{userId?:string}) => {
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* top */}
            <div className="flex items-center justify-between gap-2" > 
                <span className="text-gray-400">User Media</span>
                <Link href='/' className="text-blue-500">
                    see All
                </Link>
                
            </div>
            <div className="flex flex-wrap  col-4 items-center justify-center gap-5 ">
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
                    <div className="relative w-1/5 h-24 bg-blue-500  ">        </div>
              

                </div>
        </div>
     );
}
 
export default Usermedia;